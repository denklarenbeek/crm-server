import { CrmInterfacePage } from './app.po';

describe('crm-interface App', function() {
  let page: CrmInterfacePage;

  beforeEach(() => {
    page = new CrmInterfacePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
