import { NgBComplexdiPage } from './app.po';

describe('ng-b-complexdi App', function() {
  let page: NgBComplexdiPage;

  beforeEach(() => {
    page = new NgBComplexdiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
