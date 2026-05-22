const { expect } = require('@playwright/test');
const { Given, Then, When } = require('./bdd-fixtures');

Given('I open the eVisa web messenger', async ({ evisaPage }) => {
  await evisaPage.gotoHome();
});

Given('I open an invalid eVisa page', async ({ evisaPage }) => {
  await evisaPage.gotoInvalidPath();
});

Given('I dismiss cookies by accepting', async ({ evisaPage }) => {
  await evisaPage.acceptCookiesIfVisible();
  await evisaPage.hideCookieAcceptanceIfVisible();
});

When('I accept analytics cookies', async ({ evisaPage }) => {
  await evisaPage.acceptCookies();
});

When('I reject analytics cookies', async ({ evisaPage }) => {
  await evisaPage.rejectCookies();
});

When('I hide the cookie acceptance message', async ({ evisaPage }) => {
  await evisaPage.hideCookieAcceptance();
});

When('I send the message {string}', async ({ evisaPage }, message) => {
  await evisaPage.sendMessage(message);
});

When('I open the end chat dialog', async ({ evisaPage }) => {
  await evisaPage.openEndChatDialog();
});

When('I choose to keep chatting', async ({ evisaPage }) => {
  await evisaPage.cancelEndChat();
});

When('I confirm ending the chat', async ({ evisaPage }) => {
  await evisaPage.confirmEndChat();
});

When('I fill the input with 4096 characters of {string}', async ({ evisaPage }, char) => {
  await evisaPage.fillInput(char.repeat(4096));
});

When('I type one more character {string}', async ({ evisaPage }, char) => {
  await evisaPage.typeInput(char);
});

When('I open the accessibility statement from the footer', async ({ evisaPage }) => {
  await evisaPage.openFooterAccessibility();
});

When('I open the cookies page from the footer', async ({ evisaPage }) => {
  await evisaPage.openFooterCookies();
});

When('I navigate back in the browser', async ({ evisaPage }) => {
  await evisaPage.goBack();
});

When('I send 26 sequential messages with prefix {string}', async ({ evisaPage }, prefix) => {
  await evisaPage.sendSequentialMessages(prefix, 26);
});

When('I refresh the page', async ({ evisaPage }) => {
  await evisaPage.refresh();
});

When('I send the next sequential message with prefix {string}', async ({ evisaPage }, prefix) => {
  await evisaPage.sendNextSequentialMessageAfterRefresh(prefix);
});

Then('I should see the eVisa messenger heading', async ({ evisaPage }) => {
  await evisaPage.expectMessengerHeading();
});

Then('I should see cookie banner action controls', async ({ evisaPage }) => {
  await evisaPage.expectCookieActionButtonsVisible();
});

Then('cookie action buttons should no longer be visible', async ({ evisaPage }) => {
  await evisaPage.expectCookieActionButtonsHidden();
});

Then('I should see the hide cookie message button', async ({ evisaPage }) => {
  await evisaPage.expectHideCookieMessageVisible();
});

Then('I should not see the hide cookie message button', async ({ evisaPage }) => {
  await evisaPage.expectHideCookieMessageHidden();
});

Then('I should see the page not found heading', async ({ evisaPage }) => {
  await evisaPage.expectNotFoundHeading();
});

Then('I should see chat controls', async ({ evisaPage }) => {
  await evisaPage.expectChatControls();
});

Then('I should see my message {string}', async ({ evisaPage }, message) => {
  await evisaPage.expectUserMessage(message);
});

Then('I should see message metadata prefixed with {string}', async ({ evisaPage }, prefix) => {
  await evisaPage.expectLatestMetaPrefix(prefix);
});

Then('I should receive one more assistant response', async ({ evisaPage }) => {
  await evisaPage.expectOneMoreInboundMessage();
});

Then('I should see end chat confirmation controls', async ({ evisaPage }) => {
  await evisaPage.expectEndChatConfirmationControls();
});

Then('I should see the chat ended page', async ({ evisaPage }) => {
  await evisaPage.expectChatEndedPage();
});

Then('I should not see chat input or message history', async ({ evisaPage }) => {
  await evisaPage.expectChatUiHidden();
});

Then('I should see character counter text {string}', async ({ evisaPage }, text) => {
  await evisaPage.expectCharacterCounter(text);
});

Then('the input should be clamped to 4096 characters of {string}', async ({ evisaPage }, char) => {
  const expected = char.repeat(4096);
  await expect(await evisaPage.getInputValue()).toBe(expected);
});

Then('I should see the eVisa accessibility statement', async ({ evisaPage }) => {
  await evisaPage.expectAccessibilityStatement();
});

Then('I should see the cookies page', async ({ evisaPage }) => {
  await evisaPage.expectCookiesPage();
});

Then('I should see chat input', async ({ evisaPage }) => {
  await evisaPage.expectChatInputVisible();
});

Then('I should observe one more inbound message after refresh', async ({ evisaPage }) => {
  await evisaPage.expectInboundAfterRefresh();
});
