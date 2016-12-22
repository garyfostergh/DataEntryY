import { DataEntryYPage } from './app.po';

describe('data-entry-y App', function() {
  let page: DataEntryYPage;

  beforeEach(() => {
    page = new DataEntryYPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('aap works!');
  });
});
