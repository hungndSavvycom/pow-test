/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { SpellDetailItem, SpellObjectType } from 'interfaces/spell';
import { PersistConfig, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export interface SpellState {
  spells: SpellObjectType[];
  favouriteSpells: SpellDetailItem[];
}

const initialState: SpellState = {
  spells: [],
  favouriteSpells: [],
};

const spellSlice = createSlice({
  name: 'spell',
  initialState,
  reducers: {},
});

export const persistConfig: PersistConfig<SpellState> = {
  key: 'spell',
  storage,
  whitelist: ['favouriteSpells'],
};

export const spellReducer = persistReducer(persistConfig, spellSlice.reducer);

export const authActions = spellSlice.actions;
