import { ICanHazAdventurePage } from './app.po';

describe('i-can-haz-adventure App', () => {
  let page: ICanHazAdventurePage;

  beforeEach(() => {
    page = new ICanHazAdventurePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
