import { MyFirstAngular2AppPage } from './app.po';

describe('my-first-angular2-app App', () => {
  let page: MyFirstAngular2AppPage;

  beforeEach(() => {
    page = new MyFirstAngular2AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
