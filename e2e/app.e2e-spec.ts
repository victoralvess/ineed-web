import { INeedWebProjectPage } from './app.po';

describe('i-need-web-project App', () => {
  let page: INeedWebProjectPage;

  beforeEach(() => {
    page = new INeedWebProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
