import { spellList } from 'assets/data/spells';
import { checkIsItemFavourited } from 'utils/favourite';

describe('Test Favourite util', () => {
  test('Is favourite', () => {
    const isFavourite = checkIsItemFavourited('acid-arrow', spellList.results.splice(0, 4));
    expect(isFavourite).toBeTruthy();
  });

  test('Is not favourite', () => {
    const isFavourite = checkIsItemFavourited('acid-test', spellList.results.splice(0, 4));
    expect(isFavourite).toBeFalsy();
  });
});
