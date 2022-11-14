import React, { useMemo } from 'react';
import type { ColumnsType } from 'antd/es/table';
import { SpellListItem } from 'interfaces/spell';
import ListComponent from 'commons/List';
import { useSelector } from 'react-redux';
import { selectFavouriteSpellData } from 'stores/slices/spell/selectors';
import ListActionDropdown from 'commons/Dropdown/ListActionDropdown';
import classes from './Favourite.module.scss';

const FavouriteComponent = () => {
  const favouriteData = useSelector(selectFavouriteSpellData);
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
  }, [favouriteData]);

  return (
    <div className={classes.container}>
      <ListComponent data={favouriteData} loading={false} columns={columns} />
    </div>
  );
};

export default FavouriteComponent;
