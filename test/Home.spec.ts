import * as Browser from 'zombie';
// const Browser = require('zombie');

// We're going to make requests to http://example.com/signup
// Which will be routed to our test server localhost:3000
Browser.localhost('example.com', 3000);

describe('User visits signup page', function() {

  const browser = new Browser();

  before(function(done) {
    browser.visit('/', done);
  });

  describe('Home Page', function() {

    it('Should be successful', function() {
      browser.assert.success();
    });

    it('Should have an app div', function() {
      browser.assert.element('.app');
      browser.assert.element('.sidebar');
      browser.assert.element('.main');
    });
  });
});