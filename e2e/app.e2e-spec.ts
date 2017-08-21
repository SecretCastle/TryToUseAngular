import { ClouddemoPage } from './app.po';

describe('clouddemo App', () => {
  let page: ClouddemoPage;

  beforeEach(() => {
    page = new ClouddemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
