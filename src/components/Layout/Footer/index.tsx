import { Footer } from 'antd/lib/layout/layout';
import React from 'react';
import classes from './Footer.module.scss';

const FooterLayout = () => {
  return (
    <Footer data-testid="footer" className={classes.footer}>
      Design Created by SVC
    </Footer>
  );
};

export default FooterLayout;
