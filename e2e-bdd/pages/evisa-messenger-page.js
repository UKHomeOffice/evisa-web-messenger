const { expect } = require('@playwright/test');

class EvisaMessengerPage {
  constructor(page) {
    this.page = page;

    this.selectors = {
      acceptCookies: '#cookies-accept',
      rejectCookies: '#cookies-reject',
      hideCookiesMessage: '#hide-accept-message',
      viewCookiesLink: 'a:has-text("View cookies")',
      messageInput: '[data-testid="message-input"]',
      sendButton: '[data-testid="send-message-button"]',
      endChatButton: '[data-testid="end-chat-button"]',
      inboundMessageWrapper: '[data-testid="inbound-message-wrapper"]',
      outboundMessageWrapper: '[data-testid="outbound-message-wrapper"]',
      messageMetadata: '[data-testid="message-metadata"]',
      endChatModal: '[data-testid="end-chat-modal"]',
      closeEndChatButton: '[data-testid="close-end-chat-modal-button"]',
      confirmEndChatButton: '[data-testid="confirm-end-chat-button"]',
      characterCounter: '[data-testid="character-counter"]'
    };

    this.lastOutboundCount = 0;
    this.lastInboundCountAfterRefresh = 0;
    this.sequentialMessageIndex = 0;
    this.sequentialPrefix = '';
  }

  async gotoHome() {
    await this.page.goto('/');
  }

  async gotoInvalidPath() {
    await this.page.goto('/invalid-path-for-evisa');
  }

  async acceptCookies() {
    await this.page.locator(this.selectors.acceptCookies).click();
  }

  async rejectCookies() {
    await this.page.locator(this.selectors.rejectCookies).click();
  }

  async hideCookieAcceptance() {
    await this.page.locator(this.selectors.hideCookiesMessage).click();
  }

  async acceptCookiesIfVisible() {
    if (await this.page.locator(this.selectors.acceptCookies).count()) {
      await this.acceptCookies();
    }
  }

  async hideCookieAcceptanceIfVisible() {
    if (await this.page.locator(this.selectors.hideCookiesMessage).count()) {
      await this.hideCookieAcceptance();
    }
  }

  async sendMessage(message) {
    this.lastOutboundCount = await this.page.locator(this.selectors.outboundMessageWrapper).count();
    await this.expectChatInputVisible();
    await this.page.locator(this.selectors.messageInput).fill(message);
    await this.page.locator(this.selectors.sendButton).click();
  }

  async openEndChatDialog() {
    await this.page.locator(this.selectors.endChatButton).click();
  }

  async cancelEndChat() {
    await this.page.locator(this.selectors.closeEndChatButton).click();
  }

  async confirmEndChat() {
    await this.page.locator(this.selectors.confirmEndChatButton).click();
  }

  async fillInput(value) {
    await this.page.locator(this.selectors.messageInput).fill(value);
  }

  async typeInput(value) {
    await this.page.locator(this.selectors.messageInput).type(value);
  }

  async getInputValue() {
    return this.page.locator(this.selectors.messageInput).inputValue();
  }

  async openFooterAccessibility() {
    await this.page.getByTestId('footer-accessibilty-statement-link').click();
  }

  async openFooterCookies() {
    await this.page.getByTestId('footer-cookies-link').click();
  }

  async goBack() {
    await this.page.goBack();
  }

  async refresh() {
    await this.page.reload();
    await this.expectChatInputVisible();
    this.lastInboundCountAfterRefresh = await this.page.locator(this.selectors.inboundMessageWrapper).count();
  }

  async sendSequentialMessages(prefix, count) {
    this.sequentialPrefix = prefix;
    for (let index = 1; index <= count; index += 1) {
      await this.sendMessage(`${prefix} ${index}`);
      await this.expectUserMessage(`${prefix} ${index}`);
      this.sequentialMessageIndex = index;
    }
  }

  async sendNextSequentialMessageAfterRefresh(prefix) {
    if (!this.sequentialPrefix) {
      this.sequentialPrefix = prefix;
    }

    const nextIndex = this.sequentialMessageIndex + 1;
    const nextMessage = `${this.sequentialPrefix} ${nextIndex}`;
    let sendWasObserved = false;

    for (let attempt = 1; attempt <= 3; attempt += 1) {
      await this.sendMessage(nextMessage);
      await expect(this.page.locator(this.selectors.messageInput)).toHaveValue('');

      try {
        await expect.poll(async () => {
          return this.page.locator(this.selectors.inboundMessageWrapper).count();
        }, {
          timeout: 10_000,
          intervals: [500, 1000, 2000]
        }).toBeGreaterThan(this.lastInboundCountAfterRefresh);

        sendWasObserved = true;
        this.sequentialMessageIndex = nextIndex;
        break;
      } catch {
        // Retry while chat session history rehydrates.
      }
    }

    expect(sendWasObserved).toBe(true);
  }

  async expectMessengerHeading() {
    await expect(this.page.getByRole('heading', { name: 'Home Office eVisa Chat' })).toBeVisible();
  }

  async expectCookieActionButtonsVisible() {
    await expect(this.page.locator(this.selectors.acceptCookies)).toBeVisible();
    await expect(this.page.locator(this.selectors.rejectCookies)).toBeVisible();
    await expect(this.page.locator(this.selectors.viewCookiesLink)).toBeVisible();
  }

  async expectCookieActionButtonsHidden() {
    await expect(this.page.locator(this.selectors.acceptCookies)).toHaveCount(0);
    await expect(this.page.locator(this.selectors.rejectCookies)).toHaveCount(0);
  }

  async expectHideCookieMessageVisible() {
    await expect(this.page.locator(this.selectors.hideCookiesMessage)).toBeVisible();
  }

  async expectHideCookieMessageHidden() {
    await expect(this.page.locator(this.selectors.hideCookiesMessage)).toHaveCount(0);
  }

  async expectNotFoundHeading() {
    await expect(this.page.getByRole('heading', { name: 'Page not found' })).toBeVisible();
  }

  async expectChatControls() {
    await this.expectChatInputVisible();
    await expect(this.page.locator(this.selectors.sendButton)).toBeVisible();
    await expect(this.page.locator(this.selectors.endChatButton)).toBeVisible();
  }

  async expectUserMessage(message) {
    await expect(this.page.locator(this.selectors.inboundMessageWrapper).filter({ hasText: message }).first()).toBeVisible();
  }

  async expectLatestMetaPrefix(prefix) {
    const metadata = this.page.locator(this.selectors.messageMetadata).filter({ hasText: prefix });
    await expect(metadata.first()).toBeVisible();
    await expect(metadata.first()).toContainText(/\d{2}:\d{2}/);
  }

  async expectOneMoreInboundMessage() {
    await expect.poll(async () => {
      return this.page.locator(this.selectors.outboundMessageWrapper).count();
    }, {
      timeout: 30_000,
      intervals: [500, 1000, 2000]
    }).toBeGreaterThan(this.lastOutboundCount);
  }

  async expectEndChatConfirmationControls() {
    await expect(this.page.locator(this.selectors.endChatModal)).toBeVisible();
    await expect(this.page.getByTestId('end-chat-modal-heading')).toContainText('Do you want to end the chat?');
    await expect(this.page.getByRole('button', { name: 'Yes, end chat' })).toBeVisible();
    await expect(this.page.getByRole('button', { name: 'No, keep chatting' })).toBeVisible();
  }

  async expectChatEndedPage() {
    await expect(this.page.getByRole('heading', { name: 'Your chat has ended' })).toBeVisible();
  }

  async expectChatUiHidden() {
    await expect(this.page.locator(this.selectors.messageInput)).toHaveCount(0);
    await expect(this.page.locator(this.selectors.inboundMessageWrapper)).toHaveCount(0);
  }

  async expectCharacterCounter(text) {
    await expect(this.page.locator(this.selectors.characterCounter)).toContainText(text);
  }

  async expectAccessibilityStatement() {
    await expect(this.page).toHaveURL(/\/accessibility$/);
    await expect(
      this.page.getByRole('heading', {
        name: 'Accessibility statement for electronic visa'
      })
    ).toBeVisible();
  }

  async expectCookiesPage() {
    await expect(this.page).toHaveURL(/\/cookies$/);
    await expect(this.page.getByRole('heading', { name: 'Cookies', exact: true })).toBeVisible();
  }

  async expectChatInputVisible() {
    await expect(this.page.locator(this.selectors.messageInput)).toBeVisible();
  }

  async expectInboundAfterRefresh() {
    await this.expectOneMoreInboundMessage();
  }
}

module.exports = {
  EvisaMessengerPage
};
