import { Input, InputProps } from 'antd';
import React, { ReactNode } from 'react';
import classes from './SearchBar.module.scss';

interface IProps extends InputProps {
  icon: ReactNode;
  label: string;
}

const SearchBar = (props: IProps) => {
  const { icon, label } = props;
  return (
    <div className={classes.box}>
      <div className={classes.label}>{label}</div>
      <Input className={classes.container} {...props} prefix={icon} />
    </div>
  );
};

export default SearchBar;
