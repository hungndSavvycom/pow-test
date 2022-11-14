/* eslint-disable jsx-a11y/anchor-is-valid */
import { EyeOutlined, HeartFilled, HeartOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useFavourite } from 'hooks/useFavourite';
import { SpellListItem } from 'interfaces/spell';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Dropdown.module.scss';

interface IProps {
  item: SpellListItem;
}

const ListActionDropdown: React.FC<IProps> = (props) => {
  const { item } = props;

  const { isFavourite, onUpdateFavourite } = useFavourite(item);

  const navigate = useNavigate();

  const onGoToSpell = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    navigate(`/spells/${item.index}`);
  }, []);

  const onHandleFavourite = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onUpdateFavourite();
  }, []);

  return (
    <>
      <div data-testid="favourite-menu" style={{ display: 'none' }} aria-hidden>
        {isFavourite ? 'Remove from Favourite' : 'Add to Favourite'}
      </div>
      <div className={classes.container}>
        <Button onClick={onGoToSpell} className={classes.button} icon={<EyeOutlined />}>
          View Spell
        </Button>
        <Button
          onClick={onHandleFavourite}
          className={classes[`button${isFavourite ? '__active' : ''}`]}
          icon={isFavourite ? <HeartFilled /> : <HeartOutlined />}
        >
          {isFavourite ? 'Remove from Favourite' : 'Add to Favourite'}
        </Button>
      </div>
      {/* <Dropdown trigger={['click']} placement="bottom" menu={{ items }}>
        <Button data-testid="action-button">Actions</Button>
      </Dropdown> */}
    </>
  );
};

export default React.memo(ListActionDropdown);
