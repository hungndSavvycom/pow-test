import React from 'react';
import classes from './Overall.module.scss';

interface IProps {
  label: string;
  value?: string | boolean | number;
}

const OverallItem: React.FC<IProps> = (props) => {
  const { label, value } = props;
  return (
    <div className={classes.item}>
      <span className={classes.item__title}>{`${label}: `}</span>
      <span className={classes.item__value}>{value === undefined ? 'No information' : value}</span>
    </div>
  );
};

export default OverallItem;
