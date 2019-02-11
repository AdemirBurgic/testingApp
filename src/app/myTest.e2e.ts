import {} from 'jasmine';
import { browser, by, element, protractor, ExpectedConditions } from 'protractor';
import 'tslib';

describe('Header', () => {

  beforeAll(async () => {
      await browser.get('http://localhost:4200/').then(() => {
      });
    });;

      it(`should check for text`, async () => {
        const title = await element(by.css('h2'));
        browser.sleep(8000);
        expect(title.getText()).toBe('Here are some links to help you start:');
      });
});