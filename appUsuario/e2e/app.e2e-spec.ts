import { AppColegioPage } from './app.po';

describe('app-colegio App', () => {
  let page: AppColegioPage;

  beforeEach(() => {
    page = new AppColegioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
