/* eslint-disable jsx-a11y/anchor-is-valid */
import { EyeOutlined, HeartFilled, HeartOutlined } from '@ant-design/icons';
import { Button, Dropdown, MenuProps } from 'antd';
import { useFavourite } from 'hooks/useFavourite';
import { SpellObjectType } from 'interfaces/spell';
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { getMenuItem } from 'utils/menu';

interface IProps {
  item: SpellObjectType;
}

const ListActionDropdown: React.FC<IProps> = (props) => {
  const { item } = props;

  const { isFavourite, onUpdateFavourite } = useFavourite(item);

  const items: MenuProps['items'] = useMemo(() => {
    return [
      getMenuItem(<Link to={`/spells/${item.index}`}>View Spell</Link>, '1', <EyeOutlined size={50} />),
      getMenuItem(
        <a role="presentation" onClick={onUpdateFavourite}>
          {isFavourite ? 'Remove from Favourite' : 'Add to Favourite'}
        </a>,
        '2',
        isFavourite ? <HeartFilled /> : <HeartOutlined />,
      ),
    ];
  }, [isFavourite, item.index, onUpdateFavourite]);
  return (
    <>
      <div data-testid="favourite-menu" style={{ display: 'none' }} aria-hidden>
        {isFavourite ? 'Remove from Favourite' : 'Add to Favourite'}
      </div>
      <Dropdown trigger={['click']} placement="bottom" menu={{ items }}>
        <Button data-testid="action-button">Actions</Button>
      </Dropdown>
    </>
  );
};

export default React.memo(ListActionDropdown);
