import { SpellObjectType } from 'utils/interfaces/spell';
import _ from 'lodash';

export const checkIsItemFavourited = (index: string, data: SpellObjectType[]) => {
  let check = false;
  if (index && Array.isArray(data)) {
    data.forEach((value) => {
      if (value.index === index) {
        check = true;
      }
    });
  }

  return check;
};
