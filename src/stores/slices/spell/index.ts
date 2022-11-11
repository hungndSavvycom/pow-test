/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FavouriteType, SpellObjectType } from 'interfaces/spell';
import { PersistConfig, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import _ from 'lodash';

export interface SpellFavouritePayload {
  item: SpellObjectType;
  type: FavouriteType;
}
export interface SpellState {
  spells: SpellObjectType[];
  favouriteSpells: SpellObjectType[];
}

const initialState: SpellState = {
  spells: [],
  favouriteSpells: [],
};

const spellSlice = createSlice({
  name: 'spell',
  initialState,
  reducers: {
    setFavouriteSpell(state: SpellState, action: PayloadAction<SpellFavouritePayload>) {
      const array = [...state.favouriteSpells];
      const { item, type } = action.payload;
      if (type === 'add') {
        array.push(item);
      } else {
        const currentItem = _.find(array, (value) => value.index === item.index);
        if (currentItem) {
          _.remove(array, (value) => value.index === item.index);
        }
      }

      state.favouriteSpells = array;
    },
  },
});

export const persistConfig: PersistConfig<SpellState> = {
  key: 'spell',
  storage,
  whitelist: ['favouriteSpells'],
};

export const spellReducer = persistReducer(persistConfig, spellSlice.reducer);

export const spellActions = spellSlice.actions;
