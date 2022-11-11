import { SpellDetailItem } from 'interfaces/spell';
import React from 'react';
import classes from './Class.module.scss';

interface DetailProps {
  item: SpellDetailItem;
}

const SpellClass: React.FC<DetailProps> = (props) => {
  const { item } = props;
  console.log('🚀 ~ file: index.tsx ~ line 10 ~ item', item);
  return <div className={classes.container}>index</div>;
};

export default SpellClass;
