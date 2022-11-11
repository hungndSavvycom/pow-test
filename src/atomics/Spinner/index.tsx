import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import React from 'react';

interface IProps {
  size?: number;
}

const Spinner = (props: IProps) => {
  const { size } = props;
  return <Spin indicator={<LoadingOutlined style={{ fontSize: size || 24 }} spin />} />;
};

export default Spinner;
