import { render, screen } from '@testing-library/react';
import type { ColumnsType } from 'antd/es/table';
import { spellList } from 'assets/data/spells';
import ListComponent from 'commons/List';
import { SpellObjectType } from 'interfaces/spell';
import { BrowserRouter } from 'react-router-dom';

Object.defineProperty(window, 'matchMedia', {
  value: () => {
    return {
      matches: false,
      addListener: () => {},
      removeListener: () => {},
    };
  },
});
describe('Test List table component', () => {
  const columns: ColumnsType<SpellObjectType> = [
    {
      title: 'Index',
      dataIndex: 'index',
      key: 'index',
    },
    {
      title: 'Spell name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Api url',
      dataIndex: 'url',
      key: 'url',
    },
  ];
  test('Is loading component', () => {
    render(
      <BrowserRouter>
        <ListComponent columns={columns} loading />
      </BrowserRouter>,
    );

    const loadingSkeleton = screen.getByTestId('loading-table');

    expect(loadingSkeleton).toBeInTheDocument();
  });

  test('Is empty component', () => {
    render(
      <BrowserRouter>
        <ListComponent columns={columns} loading={false} />
      </BrowserRouter>,
    );

    const emptyComponent = screen.getByTestId('empty-table');

    expect(emptyComponent).toBeInTheDocument();
  });

  test('Exist data', () => {
    render(
      <BrowserRouter>
        <ListComponent columns={columns} loading={false} data={spellList.results} />
      </BrowserRouter>,
    );

    const emptyComponent = screen.getByTestId('list-table');

    expect(emptyComponent).toBeInTheDocument();
  });
});
