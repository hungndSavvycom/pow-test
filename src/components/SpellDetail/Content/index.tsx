import { Empty, Skeleton } from 'antd';
import { SpellDetailItem } from 'interfaces/spell';
import React from 'react';
import SpellClass from '../Class';
import SpellIntroduction from '../Introduction';
import SpellOverall from '../Overall';
import classes from './Content.module.scss';

interface IProps {
  item?: SpellDetailItem;
  loading: boolean;
  isError: boolean;
}

const SpellContent: React.FC<IProps> = (props) => {
  const { item, loading, isError } = props;

  if (loading)
    return (
      <div data-testid="loading-detail-spell">
        <Skeleton active />
      </div>
    );
  if (isError || !item) return <Empty data-testid="empty-detail-spell" />;

  return (
    <div className={classes.grid}>
      <SpellIntroduction item={item} />
      <SpellClass item={item} />
      <SpellOverall item={item} />
    </div>
  );
};

export default React.memo(SpellContent);
