import { Divider } from 'antd';
import { SpellObjectType } from 'interfaces/spell';
import React, { useCallback } from 'react';
import classes from './Class.module.scss';

interface IProps {
  classData: SpellObjectType[];
}

const ClassItem: React.FC<IProps> = (props) => {
  const { classData } = props;

  const renderItem = useCallback((value: SpellObjectType) => {
    return (
      <div key={value.index} className={classes.classContainer}>
        <span className={classes.classContainer__title}>{'Name: '}</span>
        <span className={classes.classContainer__value}>{value.name}</span>
        <Divider />
        <span className={classes.classContainer__title}>{'URL: '}</span>
        <span className={classes.classContainer__value}>{value.url}</span>
      </div>
    );
  }, []);

  return (
    <div className={classes.itemContainer}>
      {classData.map((value) => {
        return renderItem(value);
      })}
    </div>
  );
};

export default ClassItem;
