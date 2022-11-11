import { Menu, MenuProps } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

const HeaderLayout = () => {
  const location = useLocation();
  console.log('🚀 ~ file: index.tsx ~ line 8 ~ HeaderLayout ~ location', location.pathname);

  const activePath = useMemo(() => {
    let pathKey = '1';
    switch (location.pathname) {
      case '/':
        pathKey = '1';
        break;
      case '/favourites':
        pathKey = '2';
        break;

      default:
        break;
    }

    return pathKey;
  }, [location.pathname]);

  const itemMenus: MenuProps['items'] = useMemo(() => {
    return [
      {
        key: '1',
        label: <Link to="/">List spells</Link>,
      },
      {
        key: '2',
        label: <Link to="/favourites">List favourite spells</Link>,
      },
    ];
  }, []);

  return (
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[activePath]} items={itemMenus} />
    </Header>
  );
};

export default HeaderLayout;
