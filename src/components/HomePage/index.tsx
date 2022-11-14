import { useListSpell } from 'hooks/useListSpell';
import React, { useMemo } from 'react';
import type { ColumnsType } from 'antd/es/table';
import { SpellListItem } from 'utils/interfaces/spell';
import ListComponent from 'components/common/List';
import ListActionDropdown from 'components/common/Dropdown/ListActionDropdown';
import classes from './HomePage.module.scss';

const HomeComponent = () => {
  const { spellData, loading } = useListSpell();
  const columns: ColumnsType<SpellListItem> = useMemo(() => {
    return [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        sorter: (a, b) => {
          return (a.id || 0) - (b.id || 0);
        },
      },
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
          return <ListActionDropdown item={item} />;
        },
      },
    ];
  }, []);

  return (
    <div className={classes.container}>
      <ListComponent data={spellData} loading={loading} columns={columns} />
    </div>
  );
};

export default HomeComponent;
