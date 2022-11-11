import { render, screen } from '@testing-library/react';
import type { ColumnsType } from 'antd/es/table';
import { spellList } from 'assets/data/spells';
import ListComponent from 'components/List';
import { SpellObjectType } from 'interfaces/spell';

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
    render(<ListComponent columns={columns} loading />);

    const loadingSkeleton = screen.getByTestId('loading-table');

    expect(loadingSkeleton).toBeInTheDocument();
  });

  test('Is empty component', () => {
    render(<ListComponent columns={columns} loading={false} />);

    const emptyComponent = screen.getByTestId('empty-table');

    expect(emptyComponent).toBeInTheDocument();
  });

  test('Exist data', () => {
    render(<ListComponent columns={columns} loading={false} data={spellList.results} />);

    const emptyComponent = screen.getByTestId('list-table');

    expect(emptyComponent).toBeInTheDocument();
  });
});
