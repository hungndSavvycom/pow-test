import { useRoutes } from 'react-router-dom';
import MainLayout from 'components/Layout/MainLayout';
import { HomePage } from 'pages/HomePage/loadable';
import { SpellDetail } from 'pages/SpellDetail/loadable';

const RouterList = () => {
  return useRoutes([
    {
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/spells/:index',
          element: <SpellDetail />,
        },
      ],
    },
  ]);
};

export default RouterList;
