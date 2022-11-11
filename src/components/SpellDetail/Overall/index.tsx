import { SpellDetailItem } from 'interfaces/spell';
import React from 'react';
import classes from './Overall.module.scss'

interface IProps {
  item: SpellDetailItem;
}

const SpellOverall = (props: IProps) => {
  const { item } = props;
  console.log('🚀 ~ file: index.tsx ~ line 10 ~ SpellIntroduction ~ item', item);
  return <div className={classes.container}>index</div>;
};

export default SpellOverall;
