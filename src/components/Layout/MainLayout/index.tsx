import { Layout } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import React from 'react';
import { Outlet } from 'react-router-dom';
import classes from './MainLayout.module.scss';

const MainLayout = () => {
  return (
    <Layout className="layout">
      <Header />
      <Content className={classes.content}>
        <div className={classes.container}>
          <Outlet />
        </div>
      </Content>
      <Footer className={classes.footer}>Design Created by SVC</Footer>
    </Layout>
  );
};

export default MainLayout;
