import { BssAngularPage } from './app.po';

describe('bss-angular App', () => {
  let page: BssAngularPage;

  beforeEach(() => {
    page = new BssAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
