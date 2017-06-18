import { GivemecoffeeFrontendPage } from './app.po';

describe('givemecoffee-frontend App', () => {
  let page: GivemecoffeeFrontendPage;

  beforeEach(() => {
    page = new GivemecoffeeFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
