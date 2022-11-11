import { Tabs } from 'antd';
import { SpellDetailItem } from 'interfaces/spell';
import React from 'react';
import classes from './Class.module.scss';
import ClassItem from './ClassItem';

interface DetailProps {
  item: SpellDetailItem;
}

const SpellClass: React.FC<DetailProps> = (props) => {
  const { item } = props;
  return (
    <div data-testid="spell-class" className={classes.container}>
      <Tabs
        tabPosition="top"
        defaultActiveKey="1"
        items={[
          {
            label: 'Classes',
            key: '1',
            children: <ClassItem classData={item.classes} />,
          },
          {
            label: 'Sub Classes',
            key: '2',
            children: <ClassItem classData={item.subclasses} />,
          },
        ]}
      />
    </div>
  );
};

export default SpellClass;
