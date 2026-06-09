// Generated from: e2e-bdd/features/evisa-web-messenger.feature
import { test } from "../../../e2e-bdd/steps/bdd-fixtures.js";

test.describe('eVisa web messenger core journeys', () => {

  test('Accept analytics cookies flow', { tag: ['@EvisaWebMessenger'] }, async ({ Given, When, Then, And, evisaPage }) => { 
    await Given('I open the eVisa web messenger', null, { evisaPage }); 
    await Then('I should see the eVisa messenger heading', null, { evisaPage }); 
    await And('I should see cookie banner action controls', null, { evisaPage }); 
    await When('I accept analytics cookies', null, { evisaPage }); 
    await Then('cookie action buttons should no longer be visible', null, { evisaPage }); 
    await And('I should see the hide cookie message button', null, { evisaPage }); 
    await When('I hide the cookie acceptance message', null, { evisaPage }); 
    await Then('I should not see the hide cookie message button', null, { evisaPage }); 
  });

  test('Reject analytics cookies flow', { tag: ['@EvisaWebMessenger'] }, async ({ Given, When, Then, And, evisaPage }) => { 
    await Given('I open the eVisa web messenger', null, { evisaPage }); 
    await Then('I should see the eVisa messenger heading', null, { evisaPage }); 
    await And('I should see cookie banner action controls', null, { evisaPage }); 
    await When('I reject analytics cookies', null, { evisaPage }); 
    await Then('cookie action buttons should no longer be visible', null, { evisaPage }); 
    await And('I should see the hide cookie message button', null, { evisaPage }); 
    await When('I hide the cookie acceptance message', null, { evisaPage }); 
    await Then('I should not see the hide cookie message button', null, { evisaPage }); 
  });

  test('Invalid page returns not found', { tag: ['@EvisaWebMessenger'] }, async ({ Given, When, Then, And, evisaPage }) => { 
    await Given('I open an invalid eVisa page', null, { evisaPage }); 
    await When('I accept analytics cookies', null, { evisaPage }); 
    await And('I hide the cookie acceptance message', null, { evisaPage }); 
    await Then('I should see the page not found heading', null, { evisaPage }); 
  });

  test('Look and feel, message exchange, and end chat flow', { tag: ['@EvisaWebMessenger'] }, async ({ Given, When, Then, And, evisaPage }) => { 
    await Given('I open the eVisa web messenger', null, { evisaPage }); 
    await And('I dismiss cookies by accepting', null, { evisaPage }); 
    await Then('I should see chat controls', null, { evisaPage }); 
    await When('I send the message "Greetings"', null, { evisaPage }); 
    await Then('I should see my message "Greetings"', null, { evisaPage }); 
    await And('I should see message metadata prefixed with "You at"', null, { evisaPage }); 
    await And('I should receive one more assistant response', null, { evisaPage }); 
    await And('I should see message metadata prefixed with "Digital assistant at"', null, { evisaPage }); 
    await When('I send the message "Need help with my EVISA"', null, { evisaPage }); 
    await Then('I should see my message "Need help with my EVISA"', null, { evisaPage }); 
    await And('I should see message metadata prefixed with "You at"', null, { evisaPage }); 
    await And('I should receive one more assistant response', null, { evisaPage }); 
    await And('I should see message metadata prefixed with "Digital assistant at"', null, { evisaPage }); 
    await When('I open the end chat dialog', null, { evisaPage }); 
    await Then('I should see end chat confirmation controls', null, { evisaPage }); 
    await When('I choose to keep chatting', null, { evisaPage }); 
    await Then('I should see my message "Greetings"', null, { evisaPage }); 
    await And('I should see my message "Need help with my EVISA"', null, { evisaPage }); 
    await When('I open the end chat dialog', null, { evisaPage }); 
    await And('I confirm ending the chat', null, { evisaPage }); 
    await Then('I should see the chat ended page', null, { evisaPage }); 
    await And('I should not see chat input or message history', null, { evisaPage }); 
  });

  test('Character limit flow', { tag: ['@EvisaWebMessenger'] }, async ({ Given, When, Then, And, evisaPage }) => { 
    await Given('I open the eVisa web messenger', null, { evisaPage }); 
    await And('I dismiss cookies by accepting', null, { evisaPage }); 
    await When('I fill the input with 4096 characters of "a"', null, { evisaPage }); 
    await Then('I should see character counter text "0 characters left"', null, { evisaPage }); 
    await When('I type one more character "b"', null, { evisaPage }); 
    await Then('the input should be clamped to 4096 characters of "a"', null, { evisaPage }); 
    await And('I should see character counter text "0 characters left"', null, { evisaPage }); 
  });

  test('Open accessibility statement from start page', { tag: ['@EvisaWebMessenger'] }, async ({ Given, When, Then, And, evisaPage }) => { 
    await Given('I open the eVisa web messenger', null, { evisaPage }); 
    await And('I dismiss cookies by accepting', null, { evisaPage }); 
    await When('I open the accessibility statement from the footer', null, { evisaPage }); 
    await Then('I should see the eVisa accessibility statement', null, { evisaPage }); 
  });

  test('Navigate to cookies page and back to chat', { tag: ['@EvisaWebMessenger'] }, async ({ Given, When, Then, evisaPage }) => { 
    await Given('I open the eVisa web messenger', null, { evisaPage }); 
    await When('I open the cookies page from the footer', null, { evisaPage }); 
    await Then('I should see the cookies page', null, { evisaPage }); 
    await When('I navigate back in the browser', null, { evisaPage }); 
    await Then('I should see chat input', null, { evisaPage }); 
  });

  test('Offline and reconnect banners with control disable and enable', { tag: ['@EvisaWebMessenger'] }, async ({ Given, When, Then, And, evisaPage }) => { 
    await Given('I open the eVisa web messenger', null, { evisaPage }); 
    await And('I dismiss cookies by accepting', null, { evisaPage }); 
    await Then('chat controls should be enabled', null, { evisaPage }); 
    await When('I set network offline', null, { evisaPage }); 
    await Then('I should see the offline banner', null, { evisaPage }); 
    await And('chat controls should be disabled', null, { evisaPage }); 
    await When('I reconnect network with retry', null, { evisaPage }); 
    await Then('I should see the online banner', null, { evisaPage }); 
    await And('chat controls should be enabled', null, { evisaPage }); 
  });

  test('Send 26 sequential messages and continue after refresh', { tag: ['@EvisaWebMessenger', '@history'] }, async ({ Given, When, Then, And, evisaPage }) => { 
    await Given('I open the eVisa web messenger', null, { evisaPage }); 
    await And('I dismiss cookies by accepting', null, { evisaPage }); 
    await When('I send 26 sequential messages with prefix "sequential message"', null, { evisaPage }); 
    await Then('I should see my message "sequential message 26"', null, { evisaPage }); 
    await When('I refresh the page', null, { evisaPage }); 
    await And('I send the next sequential message with prefix "sequential message"', null, { evisaPage }); 
    await Then('I should observe one more inbound message after refresh'); 
  });

  test('Scroll to top fetches older history after refresh', { tag: ['@EvisaWebMessenger', '@history'] }, async ({ Given, When, Then, And, evisaPage }) => { 
    await Given('I open the eVisa web messenger', null, { evisaPage }); 
    await And('I dismiss cookies by accepting', null, { evisaPage }); 
    await When('I send 35 sequential messages with prefix "sequential message"', null, { evisaPage }); 
    await And('I refresh the page', null, { evisaPage }); 
    await Then('I should be able to fetch older history by scrolling to top', null, { evisaPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('e2e-bdd/features/evisa-web-messenger.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"tags":["@EvisaWebMessenger"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I open the eVisa web messenger","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should see the eVisa messenger heading","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"And I should see cookie banner action controls","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When I accept analytics cookies","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then cookie action buttons should no longer be visible","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"And I should see the hide cookie message button","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When I hide the cookie acceptance message","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then I should not see the hide cookie message button","stepMatchArguments":[]}]},
  {"pwTestLine":17,"pickleLine":17,"tags":["@EvisaWebMessenger"],"steps":[{"pwStepLine":18,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"Given I open the eVisa web messenger","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then I should see the eVisa messenger heading","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"And I should see cookie banner action controls","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When I reject analytics cookies","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then cookie action buttons should no longer be visible","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"And I should see the hide cookie message button","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When I hide the cookie acceptance message","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then I should not see the hide cookie message button","stepMatchArguments":[]}]},
  {"pwTestLine":28,"pickleLine":27,"tags":["@EvisaWebMessenger"],"steps":[{"pwStepLine":29,"gherkinStepLine":28,"keywordType":"Context","textWithKeyword":"Given I open an invalid eVisa page","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"When I accept analytics cookies","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"And I hide the cookie acceptance message","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then I should see the page not found heading","stepMatchArguments":[]}]},
  {"pwTestLine":35,"pickleLine":33,"tags":["@EvisaWebMessenger"],"steps":[{"pwStepLine":36,"gherkinStepLine":34,"keywordType":"Context","textWithKeyword":"Given I open the eVisa web messenger","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":35,"keywordType":"Context","textWithKeyword":"And I dismiss cookies by accepting","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"Then I should see chat controls","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":37,"keywordType":"Action","textWithKeyword":"When I send the message \"Greetings\"","stepMatchArguments":[{"group":{"start":19,"value":"\"Greetings\"","children":[{"start":20,"value":"Greetings","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":40,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"Then I should see my message \"Greetings\"","stepMatchArguments":[{"group":{"start":24,"value":"\"Greetings\"","children":[{"start":25,"value":"Greetings","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":41,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"And I should see message metadata prefixed with \"You at\"","stepMatchArguments":[{"group":{"start":44,"value":"\"You at\"","children":[{"start":45,"value":"You at","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":42,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"And I should receive one more assistant response","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":41,"keywordType":"Outcome","textWithKeyword":"And I should see message metadata prefixed with \"Digital assistant at\"","stepMatchArguments":[{"group":{"start":44,"value":"\"Digital assistant at\"","children":[{"start":45,"value":"Digital assistant at","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":44,"gherkinStepLine":42,"keywordType":"Action","textWithKeyword":"When I send the message \"Need help with my EVISA\"","stepMatchArguments":[{"group":{"start":19,"value":"\"Need help with my EVISA\"","children":[{"start":20,"value":"Need help with my EVISA","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":45,"gherkinStepLine":43,"keywordType":"Outcome","textWithKeyword":"Then I should see my message \"Need help with my EVISA\"","stepMatchArguments":[{"group":{"start":24,"value":"\"Need help with my EVISA\"","children":[{"start":25,"value":"Need help with my EVISA","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":46,"gherkinStepLine":44,"keywordType":"Outcome","textWithKeyword":"And I should see message metadata prefixed with \"You at\"","stepMatchArguments":[{"group":{"start":44,"value":"\"You at\"","children":[{"start":45,"value":"You at","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":47,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"And I should receive one more assistant response","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"And I should see message metadata prefixed with \"Digital assistant at\"","stepMatchArguments":[{"group":{"start":44,"value":"\"Digital assistant at\"","children":[{"start":45,"value":"Digital assistant at","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":49,"gherkinStepLine":47,"keywordType":"Action","textWithKeyword":"When I open the end chat dialog","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"Then I should see end chat confirmation controls","stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":49,"keywordType":"Action","textWithKeyword":"When I choose to keep chatting","stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":50,"keywordType":"Outcome","textWithKeyword":"Then I should see my message \"Greetings\"","stepMatchArguments":[{"group":{"start":24,"value":"\"Greetings\"","children":[{"start":25,"value":"Greetings","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":53,"gherkinStepLine":51,"keywordType":"Outcome","textWithKeyword":"And I should see my message \"Need help with my EVISA\"","stepMatchArguments":[{"group":{"start":24,"value":"\"Need help with my EVISA\"","children":[{"start":25,"value":"Need help with my EVISA","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":54,"gherkinStepLine":52,"keywordType":"Action","textWithKeyword":"When I open the end chat dialog","stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":53,"keywordType":"Action","textWithKeyword":"And I confirm ending the chat","stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":54,"keywordType":"Outcome","textWithKeyword":"Then I should see the chat ended page","stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":55,"keywordType":"Outcome","textWithKeyword":"And I should not see chat input or message history","stepMatchArguments":[]}]},
  {"pwTestLine":60,"pickleLine":57,"tags":["@EvisaWebMessenger"],"steps":[{"pwStepLine":61,"gherkinStepLine":58,"keywordType":"Context","textWithKeyword":"Given I open the eVisa web messenger","stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":59,"keywordType":"Context","textWithKeyword":"And I dismiss cookies by accepting","stepMatchArguments":[]},{"pwStepLine":63,"gherkinStepLine":60,"keywordType":"Action","textWithKeyword":"When I fill the input with 4096 characters of \"a\"","stepMatchArguments":[{"group":{"start":22,"value":"4096","children":[]},"parameterTypeName":"int"},{"group":{"start":41,"value":"\"a\"","children":[{"start":42,"value":"a","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":64,"gherkinStepLine":61,"keywordType":"Outcome","textWithKeyword":"Then I should see character counter text \"0 characters left\"","stepMatchArguments":[{"group":{"start":36,"value":"\"0 characters left\"","children":[{"start":37,"value":"0 characters left","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":65,"gherkinStepLine":62,"keywordType":"Action","textWithKeyword":"When I type one more character \"b\"","stepMatchArguments":[{"group":{"start":26,"value":"\"b\"","children":[{"start":27,"value":"b","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":66,"gherkinStepLine":63,"keywordType":"Outcome","textWithKeyword":"Then the input should be clamped to 4096 characters of \"a\"","stepMatchArguments":[{"group":{"start":31,"value":"4096","children":[]},"parameterTypeName":"int"},{"group":{"start":50,"value":"\"a\"","children":[{"start":51,"value":"a","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":67,"gherkinStepLine":64,"keywordType":"Outcome","textWithKeyword":"And I should see character counter text \"0 characters left\"","stepMatchArguments":[{"group":{"start":36,"value":"\"0 characters left\"","children":[{"start":37,"value":"0 characters left","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":70,"pickleLine":66,"tags":["@EvisaWebMessenger"],"steps":[{"pwStepLine":71,"gherkinStepLine":67,"keywordType":"Context","textWithKeyword":"Given I open the eVisa web messenger","stepMatchArguments":[]},{"pwStepLine":72,"gherkinStepLine":68,"keywordType":"Context","textWithKeyword":"And I dismiss cookies by accepting","stepMatchArguments":[]},{"pwStepLine":73,"gherkinStepLine":69,"keywordType":"Action","textWithKeyword":"When I open the accessibility statement from the footer","stepMatchArguments":[]},{"pwStepLine":74,"gherkinStepLine":70,"keywordType":"Outcome","textWithKeyword":"Then I should see the eVisa accessibility statement","stepMatchArguments":[]}]},
  {"pwTestLine":77,"pickleLine":72,"tags":["@EvisaWebMessenger"],"steps":[{"pwStepLine":78,"gherkinStepLine":73,"keywordType":"Context","textWithKeyword":"Given I open the eVisa web messenger","stepMatchArguments":[]},{"pwStepLine":79,"gherkinStepLine":74,"keywordType":"Action","textWithKeyword":"When I open the cookies page from the footer","stepMatchArguments":[]},{"pwStepLine":80,"gherkinStepLine":75,"keywordType":"Outcome","textWithKeyword":"Then I should see the cookies page","stepMatchArguments":[]},{"pwStepLine":81,"gherkinStepLine":76,"keywordType":"Action","textWithKeyword":"When I navigate back in the browser","stepMatchArguments":[]},{"pwStepLine":82,"gherkinStepLine":77,"keywordType":"Outcome","textWithKeyword":"Then I should see chat input","stepMatchArguments":[]}]},
  {"pwTestLine":85,"pickleLine":79,"tags":["@EvisaWebMessenger"],"steps":[{"pwStepLine":86,"gherkinStepLine":80,"keywordType":"Context","textWithKeyword":"Given I open the eVisa web messenger","stepMatchArguments":[]},{"pwStepLine":87,"gherkinStepLine":81,"keywordType":"Context","textWithKeyword":"And I dismiss cookies by accepting","stepMatchArguments":[]},{"pwStepLine":88,"gherkinStepLine":82,"keywordType":"Outcome","textWithKeyword":"Then chat controls should be enabled","stepMatchArguments":[]},{"pwStepLine":89,"gherkinStepLine":83,"keywordType":"Action","textWithKeyword":"When I set network offline","stepMatchArguments":[]},{"pwStepLine":90,"gherkinStepLine":84,"keywordType":"Outcome","textWithKeyword":"Then I should see the offline banner","stepMatchArguments":[]},{"pwStepLine":91,"gherkinStepLine":85,"keywordType":"Outcome","textWithKeyword":"And chat controls should be disabled","stepMatchArguments":[]},{"pwStepLine":92,"gherkinStepLine":86,"keywordType":"Action","textWithKeyword":"When I reconnect network with retry","stepMatchArguments":[]},{"pwStepLine":93,"gherkinStepLine":87,"keywordType":"Outcome","textWithKeyword":"Then I should see the online banner","stepMatchArguments":[]},{"pwStepLine":94,"gherkinStepLine":88,"keywordType":"Outcome","textWithKeyword":"And chat controls should be enabled","stepMatchArguments":[]}]},
  {"pwTestLine":97,"pickleLine":91,"tags":["@EvisaWebMessenger","@history"],"steps":[{"pwStepLine":98,"gherkinStepLine":92,"keywordType":"Context","textWithKeyword":"Given I open the eVisa web messenger","stepMatchArguments":[]},{"pwStepLine":99,"gherkinStepLine":93,"keywordType":"Context","textWithKeyword":"And I dismiss cookies by accepting","stepMatchArguments":[]},{"pwStepLine":100,"gherkinStepLine":94,"keywordType":"Action","textWithKeyword":"When I send 26 sequential messages with prefix \"sequential message\"","stepMatchArguments":[{"group":{"start":7,"value":"26","children":[]},"parameterTypeName":"int"},{"group":{"start":42,"value":"\"sequential message\"","children":[{"start":43,"value":"sequential message","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":101,"gherkinStepLine":95,"keywordType":"Outcome","textWithKeyword":"Then I should see my message \"sequential message 26\"","stepMatchArguments":[{"group":{"start":24,"value":"\"sequential message 26\"","children":[{"start":25,"value":"sequential message 26","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":102,"gherkinStepLine":96,"keywordType":"Action","textWithKeyword":"When I refresh the page","stepMatchArguments":[]},{"pwStepLine":103,"gherkinStepLine":97,"keywordType":"Action","textWithKeyword":"And I send the next sequential message with prefix \"sequential message\"","stepMatchArguments":[{"group":{"start":47,"value":"\"sequential message\"","children":[{"start":48,"value":"sequential message","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":104,"gherkinStepLine":98,"keywordType":"Outcome","textWithKeyword":"Then I should observe one more inbound message after refresh","stepMatchArguments":[]}]},
  {"pwTestLine":107,"pickleLine":101,"tags":["@EvisaWebMessenger","@history"],"steps":[{"pwStepLine":108,"gherkinStepLine":102,"keywordType":"Context","textWithKeyword":"Given I open the eVisa web messenger","stepMatchArguments":[]},{"pwStepLine":109,"gherkinStepLine":103,"keywordType":"Context","textWithKeyword":"And I dismiss cookies by accepting","stepMatchArguments":[]},{"pwStepLine":110,"gherkinStepLine":104,"keywordType":"Action","textWithKeyword":"When I send 35 sequential messages with prefix \"sequential message\"","stepMatchArguments":[{"group":{"start":7,"value":"35","children":[]},"parameterTypeName":"int"},{"group":{"start":42,"value":"\"sequential message\"","children":[{"start":43,"value":"sequential message","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":111,"gherkinStepLine":105,"keywordType":"Action","textWithKeyword":"And I refresh the page","stepMatchArguments":[]},{"pwStepLine":112,"gherkinStepLine":106,"keywordType":"Outcome","textWithKeyword":"Then I should be able to fetch older history by scrolling to top","stepMatchArguments":[]}]},
]; // bdd-data-end