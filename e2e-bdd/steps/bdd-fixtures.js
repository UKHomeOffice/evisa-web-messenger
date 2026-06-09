import { test as base } from 'playwright-bdd';
import { EvisaMessengerPage } from '../pages/evisa-messenger-page';

export const test = base.extend({
  evisaPage: async ({ page, context }, applyFixture) => {
    await applyFixture(new EvisaMessengerPage(page, context));
  }
});
