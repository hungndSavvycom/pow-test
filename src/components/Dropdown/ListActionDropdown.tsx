import { EyeOutlined, HeartOutlined } from '@ant-design/icons';
import { Button, Dropdown, MenuProps } from 'antd';
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  index: string;
}

const ListActionDropdown: React.FC<IProps> = (props) => {
  const { index } = props;
  const items: MenuProps['items'] = useMemo(() => {
    return [
      {
        label: <Link to={`/spells/${index}`}>View Spell</Link>,
        key: '1',
        icon: <EyeOutlined size={50} />,
      },
      {
        label: 'Add to favourite',
        key: '2',
        icon: <HeartOutlined />,
      },
    ];
  }, []);
  return (
    <Dropdown trigger={['click']} placement="bottom" menu={{ items }}>
      <Button>Actions</Button>
    </Dropdown>
  );
};

export default ListActionDropdown;
