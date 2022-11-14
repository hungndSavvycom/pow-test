import { Divider } from 'antd';
import { SpellDetailItem } from 'utils/interfaces/spell';
import React from 'react';
import classes from './Introduction.module.scss';

interface IProps {
  item: SpellDetailItem;
}

const SpellIntroduction = (props: IProps) => {
  const { item } = props;
  return (
    <div data-testid="spell-introduction" className={classes.container}>
      <div>
        <h2 className={classes.content__label}>Name</h2>
        <p className={classes.content__description}>{item.name}</p>
      </div>
      <Divider />
      <div>
        <h2 className={classes.content__label}>School</h2>
        <p className={classes.content__description}>{item.school.name}</p>
      </div>
      <Divider />
      <div>
        <h2 className={classes.content__label}>Description</h2>
        {item.desc.length &&
          item.desc.map((string) => {
            return (
              <p key={`${string.split(' ')[0]}`} className={classes.content__description}>
                {string}
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default SpellIntroduction;
