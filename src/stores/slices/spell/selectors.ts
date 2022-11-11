import { PAppState } from 'stores';

export const selectSpellData = (state: PAppState) => state.spell.spells;

export const selectFavouriteSpellData = (state: PAppState) => state.spell.favouriteSpells;
