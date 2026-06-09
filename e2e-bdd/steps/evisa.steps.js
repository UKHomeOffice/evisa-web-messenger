import { createBdd } from 'playwright-bdd';
import { test } from './bdd-fixtures';

const { Given, When, Then } = createBdd(test);

Given('I open the eVisa web messenger', async ({ evisaPage }) => {
  await evisaPage.openHome();
});

Given('I open an invalid eVisa page', async ({ evisaPage }) => {
  await evisaPage.openInvalidPage();
});

Given('I dismiss cookies by accepting', async ({ evisaPage }) => {
  await evisaPage.dismissCookiesByAccepting();
});

Then('I should see the eVisa messenger heading', async ({ evisaPage }) => {
  await evisaPage.expectHeading();
});

Then('I should see cookie banner action controls', async ({ evisaPage }) => {
  await evisaPage.expectCookieBannerControls();
});

When('I accept analytics cookies', async ({ evisaPage }) => {
  await evisaPage.acceptCookies();
});

When('I reject analytics cookies', async ({ evisaPage }) => {
  await evisaPage.rejectCookies();
});

When('I hide the cookie acceptance message', async ({ evisaPage }) => {
  await evisaPage.hideCookieMessage();
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
  await evisaPage.expectChatControlsVisible();
});

When('I send the message {string}', async ({ evisaPage }, message) => {
  await evisaPage.sendMessage(message);
});

Then('I should see my message {string}', async ({ evisaPage }, message) => {
  await evisaPage.expectUserMessageVisible(message);
});

Then('I should see message metadata prefixed with {string}', async ({ evisaPage }, prefix) => {
  await evisaPage.expectMessageMetadataPrefix(prefix);
});

Then('I should receive one more assistant response', async ({ evisaPage }) => {
  await evisaPage.expectAssistantResponseIncreased();
});

When('I open the end chat dialog', async ({ evisaPage }) => {
  await evisaPage.openEndChatDialog();
});

Then('I should see end chat confirmation controls', async ({ evisaPage }) => {
  await evisaPage.expectEndChatDialog();
});

When('I choose to keep chatting', async ({ evisaPage }) => {
  await evisaPage.keepChatting();
});

When('I confirm ending the chat', async ({ evisaPage }) => {
  await evisaPage.confirmEndChat();
});

Then('I should see the chat ended page', async ({ evisaPage }) => {
  await evisaPage.expectChatEndedPage();
});

Then('I should not see chat input or message history', async ({ evisaPage }) => {
  await evisaPage.expectChatCleared();
});

When('I fill the input with {int} characters of {string}', async ({ evisaPage }, count, character) => {
  await evisaPage.fillInputWithRepeatedCharacters(count, character);
});

When('I type one more character {string}', async ({ evisaPage }, character) => {
  await evisaPage.typeOneCharacter(character);
});

Then('I should see character counter text {string}', async ({ evisaPage }, text) => {
  await evisaPage.expectCharacterCounterText(text);
});

Then('the input should be clamped to {int} characters of {string}', async ({ evisaPage }, count, character) => {
  await evisaPage.expectInputClampedToCount(count, character);
});

When('I open the accessibility statement from the footer', async ({ evisaPage }) => {
  await evisaPage.openAccessibilityFromFooter();
});

Then('I should see the eVisa accessibility statement', async ({ evisaPage }) => {
  await evisaPage.expectAccessibilityStatement();
});

Then('chat controls should be enabled', async ({ evisaPage }) => {
  await evisaPage.expectChatControlsEnabled();
});

When('I set network offline', async ({ evisaPage }) => {
  await evisaPage.setOffline();
});

Then('I should see the offline banner', async ({ evisaPage }) => {
  await evisaPage.expectOfflineBanner();
});

Then('chat controls should be disabled', async ({ evisaPage }) => {
  await evisaPage.expectChatControlsDisabled();
});

When('I reconnect network with retry', async ({ evisaPage }) => {
  await evisaPage.reconnectWithRetry();
});

Then('I should see the online banner', async ({ evisaPage }) => {
  await evisaPage.expectOnlineBanner();
});

When('I open the cookies page from the footer', async ({ evisaPage }) => {
  await evisaPage.openCookiesFromFooter();
});

Then('I should see the cookies page', async ({ evisaPage }) => {
  await evisaPage.expectCookiesPage();
});

When('I navigate back in the browser', async ({ evisaPage }) => {
  await evisaPage.navigateBack();
});

Then('I should see chat input', async ({ evisaPage }) => {
  await evisaPage.expectChatInputVisible();
});

When('I send {int} sequential messages with prefix {string}', async ({ evisaPage }, count, prefix) => {
  await evisaPage.sendSequentialMessages(count, prefix);
});

When('I refresh the page', async ({ evisaPage }) => {
  await evisaPage.refreshPage();
});

When('I send the next sequential message with prefix {string}', async ({ evisaPage }, prefix) => {
  evisaPage.sequentialPrefix = prefix;
  await evisaPage.sendNextSequentialMessage();
});

Then('I should observe one more inbound message after refresh', async () => {
  // Verified in sendNextSequentialMessage with poll + assertion.
});

Then('I should be able to fetch older history by scrolling to top', async ({ evisaPage }) => {
  await evisaPage.expectOlderHistoryOnScrollTop();
});
