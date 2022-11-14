import { SkeletonList } from 'atomics/SkeletonList';
import React, { useEffect, useState } from 'react';
import type { ColumnsType } from 'antd/es/table';
import { Empty, Table } from 'antd';
import SearchBar from 'atomics/SearchBar';
import { SearchOutlined } from '@ant-design/icons';
import useDebounce from 'hooks/useDebounce';
import { useNavigate } from 'react-router-dom';
import classes from './List.module.scss';

interface ListComponentProps {
  columns: ColumnsType<any>;
  loading: boolean;
  data?: any[];
}

const ListComponent: React.FC<ListComponentProps> = (props) => {
  const { columns, loading, data } = props;
  const [keyword, setKeyword] = useState<string>('');
  const [currentData, setCurrentData] = useState<any[]>([]);
  const navigate = useNavigate();

  const currentKeyword = useDebounce(keyword, 300);

  useEffect(() => {
    if (data) {
      setCurrentData(data);
    } else {
      setCurrentData([]);
    }
  }, [data]);

  const onSearchList = (value: string) => {
    if (!data) {
      return;
    }
    if (!value) {
      setCurrentData(data);
      return;
    }
    const nameKeyword = value.toLowerCase();
    const dataArr = [...data];
    const dataList = dataArr.filter((valueItem) => valueItem.name.toLowerCase().includes(nameKeyword));
    setCurrentData(dataList);
  };

  useEffect(() => {
    onSearchList(currentKeyword);
  }, [currentKeyword]);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setKeyword(value);
  };

  if (loading) return <SkeletonList />;

  return (
    <div className={classes.container} data-testid="list-table">
      {data?.length ? (
        <div className={classes.inputSearch}>
          <SearchBar
            onChange={onChangeInput}
            icon={<SearchOutlined />}
            label="Search"
            placeholder="Search by name..."
          />
        </div>
      ) : null}
      {!currentData.length ? (
        <Empty data-testid="empty-table" />
      ) : (
        <div className={classes.table}>
          <Table
            onRow={(item) => {
              return {
                onClick: () => {
                  navigate(`/spells/${item.index}`);
                },
              };
            }}
            pagination={{ pageSize: 7, pageSizeOptions: [], size: 'small' }}
            rowKey="index"
            dataSource={currentData}
            columns={columns}
          />
        </div>
      )}
    </div>
  );
};

export default ListComponent;
