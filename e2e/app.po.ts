import { browser, element, by } from 'protractor';

export class DataEntryYPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('aap-root h1')).getText();
  }
}
