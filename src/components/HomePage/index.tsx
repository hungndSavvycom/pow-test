import { useListSpell } from 'hooks/useListSpell';
import React, { useMemo } from 'react';
import type { ColumnsType } from 'antd/es/table';
import { SpellObjectType } from 'interfaces/spell';
import ListActionDropdown from 'components/Dropdown/ListActionDropdown';
import ListComponent from 'components/List';
import classes from './HomePage.module.scss';

const HomeComponent = () => {
  const { spellData, loading } = useListSpell();
  const columns: ColumnsType<SpellObjectType> = useMemo(() => {
    return [
      {
        title: 'Index',
        dataIndex: 'index',
        key: 'index',
        sorter: (a, b) => a.index.localeCompare(b.index),
        render: (_, { index }) => <span>{index}</span>,
      },
      {
        title: 'Spell name',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => a.name.localeCompare(b.name),
      },
      {
        title: 'Api url',
        dataIndex: 'url',
        key: 'url',
      },
      {
        title: 'Actions',
        key: 'action',
        render: (_, item) => {
          return <ListActionDropdown index={item.index} />;
        },
      },
    ];
  }, []);

  return (
    <div className={classes.container}>
      <ListComponent data={spellData?.results} loading={loading} columns={columns} />
    </div>
  );
};

export default HomeComponent;
