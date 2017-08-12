import { SDQRV2Page } from './app.po';

describe('sdqr-v2 App', () => {
  let page: SDQRV2Page;

  beforeEach(() => {
    page = new SDQRV2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
