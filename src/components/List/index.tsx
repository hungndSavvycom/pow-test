import { SkeletonList } from 'atomics/SkeletonList';
import React from 'react';
import type { ColumnsType } from 'antd/es/table';
import { Empty, Table } from 'antd';
import classes from './List.module.scss';

interface ListComponentProps {
  columns: ColumnsType<any>;
  loading: boolean;
  data?: any[];
}

const ListComponent: React.FC<ListComponentProps> = (props) => {
  const { columns, loading, data } = props;

  if (loading) return <SkeletonList />;

  if (!data || !data.length) return <Empty />;

  return (
    <div className={classes.container}>
      <Table dataSource={data} columns={columns} />
    </div>
  );
};

export default ListComponent;
