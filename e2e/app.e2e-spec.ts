import { MoneyTrackerFrontendPage } from './app.po';

describe('money-tracker-frontend App', function() {
  let page: MoneyTrackerFrontendPage;

  beforeEach(() => {
    page = new MoneyTrackerFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
