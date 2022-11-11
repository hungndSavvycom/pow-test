import React, { useMemo } from 'react';
import type { ColumnsType } from 'antd/es/table';
import { SpellObjectType } from 'interfaces/spell';
import ListActionDropdown from 'components/Dropdown/ListActionDropdown';
import ListComponent from 'components/List';
import { useSelector } from 'react-redux';
import { selectFavouriteSpellData } from 'stores/slices/spell/selectors';
import classes from './Favourite.module.scss';

const FavouriteComponent = () => {
  const favouriteData = useSelector(selectFavouriteSpellData);
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
