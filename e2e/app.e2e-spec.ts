import { INeedPage } from './app.po';

describe('i-need App', () => {
  let page: INeedPage;

  beforeEach(() => {
    page = new INeedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
