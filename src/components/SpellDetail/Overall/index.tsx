import { SpellDetailItem } from 'interfaces/spell';
import React, { useMemo } from 'react';
import classes from './Overall.module.scss';
import OverallItem from './OverallItem';

interface IProps {
  item: SpellDetailItem;
}

const SpellOverall = (props: IProps) => {
  const { item } = props;
  const overallData = useMemo(() => {
    return [
      {
        index: 'level',
        label: 'Level',
        value: item.level,
      },
      {
        index: 'range',
        label: 'Range',
        value: item.range,
      },
      {
        index: 'material',
        label: 'Material',
        value: item.material,
      },
      {
        index: 'ritual',
        label: 'Ritual',
        value: item.ritual,
      },
      {
        index: 'duration',
        label: 'Duration',
        value: item.duration,
      },
      {
        index: 'concentration',
        label: 'Concentration',
        value: item.concentration,
      },
      {
        index: 'casting_time',
        label: 'Casting time',
        value: item.casting_time,
      },
      {
        index: 'attack_type',
        label: 'Attack type',
        value: item.attack_type,
      },
    ];
  }, [item]);
  return (
    <div className={classes.container}>
      {overallData.map((itemOverall) => {
        return <OverallItem key={itemOverall.index} label={itemOverall.label} value={itemOverall.value} />;
      })}
    </div>
  );
};

export default SpellOverall;
