import { combineReducers } from '@reduxjs/toolkit';
import { apiReducer } from 'stores/slices/api';
import { spellReducer } from 'stores/slices/spell';

export const rootReducer = combineReducers({
  spell: spellReducer,
  api: apiReducer,
});
