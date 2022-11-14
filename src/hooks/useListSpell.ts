import { SpellObjectType } from 'utils/interfaces/spell';
import { useState } from 'react';
import { useSpellQuery } from 'stores/slices/api';
import { serializeDataWithId } from 'utils/list';

export const useListSpell = () => {
  const { data, isLoading } = useSpellQuery({});

  return { spellData: serializeDataWithId(data?.results) as SpellObjectType[], loading: isLoading };
};
