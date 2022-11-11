import React from 'react';
import { useParams } from 'react-router-dom';
import { useSpellDetailQuery } from 'stores/slices/api';

const SpellDetailComponent = () => {
  const { index } = useParams();
  const { data } = useSpellDetailQuery({ index });
  console.log('🚀 ~ file: index.tsx ~ line 8 ~ SpellDetail ~ data', data);
  return <div>index</div>;
};

export default SpellDetailComponent;
