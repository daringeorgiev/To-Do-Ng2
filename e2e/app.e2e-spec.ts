import { ToDoNg2Page } from './app.po';

describe('to-do-ng2 App', function() {
  let page: ToDoNg2Page;

  beforeEach(() => {
    page = new ToDoNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
