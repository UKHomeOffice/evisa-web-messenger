const { test: base, createBdd } = require('playwright-bdd');
const { EvisaMessengerPage } = require('../pages/evisa-messenger-page');

const test = base.extend({
  evisaPage: async ({ page }, applyFixture) => {
    const evisaPage = new EvisaMessengerPage(page);
    await applyFixture(evisaPage);
  }
});

const { Given, When, Then } = createBdd(test);

module.exports = {
  test,
  Given,
  When,
  Then
};
