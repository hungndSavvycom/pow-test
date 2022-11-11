import { Button, Divider } from 'antd';
import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useSpellDetailQuery } from 'stores/slices/api';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import { SpellObjectType } from 'interfaces/spell';
import { useFavourite } from 'hooks/useFavourite';
import SpellContent from './Content';
import classes from './SpellDetail.module.scss';

const SpellDetailComponent = () => {
  const { index } = useParams();
  const { data, isLoading, isError } = useSpellDetailQuery({ index });
  console.log('🚀 ~ file: index.tsx ~ line 14 ~ SpellDetailComponent ~ data', data);

  const generateListItem = useMemo(() => {
    if (data) {
      return {
        index: data.index,
        name: data.name,
        url: data.url,
      };
    }
    return {
      index: '',
      name: '',
      url: '',
    };
  }, [data]) as SpellObjectType;
  console.log('🚀 ~ file: index.tsx ~ line 30 ~ generateListItem ~ generateListItem', generateListItem);

  const { isFavourite, onUpdateFavourite } = useFavourite(generateListItem);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1 className={classes.heading}>Spell Detail</h1>
        {data && (
          <Button onClick={onUpdateFavourite} icon={isFavourite ? <HeartFilled /> : <HeartOutlined />}>
            {isFavourite ? 'Remove from Favourite' : 'Add to Favourite'}
          </Button>
        )}
      </div>

      <Divider />
      <SpellContent item={data} loading={isLoading} isError={isError} />
    </div>
  );
};

export default SpellDetailComponent;
