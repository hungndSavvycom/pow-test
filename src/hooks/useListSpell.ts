import { useSpellQuery } from 'stores/slices/api';

export const useListSpell = () => {
  const { data, isLoading } = useSpellQuery({});

  return { spellData: data, loading: isLoading };
};
