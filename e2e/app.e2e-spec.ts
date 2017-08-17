import { FirstDemoPage } from './app.po';

describe('first-demo App', () => {
  let page: FirstDemoPage;

  beforeEach(() => {
    page = new FirstDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
