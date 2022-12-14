import { message } from 'antd';
import { SpellListItem } from 'utils/interfaces/spell';
import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { spellActions } from 'stores/slices/spell';
import { selectFavouriteSpellData } from 'stores/slices/spell/selectors';
import { checkIsItemFavourited } from 'utils/favourite';

export const useFavourite = (item: SpellListItem) => {
  const favouriteData = useSelector(selectFavouriteSpellData);
  const dispatch = useDispatch();
  const isFavourite = useMemo(() => {
    return checkIsItemFavourited(item.index, favouriteData);
  }, [item.index, favouriteData]);

  const onUpdateFavourite = useCallback(() => {
    dispatch(spellActions.setFavouriteSpell({ type: isFavourite ? 'remove' : 'add', item }));
    if (isFavourite) {
      message.success('Removed from favourite');
    } else {
      message.success('Added to favourite');
    }
  }, [dispatch, isFavourite, item]);

  return { isFavourite, onUpdateFavourite };
};
