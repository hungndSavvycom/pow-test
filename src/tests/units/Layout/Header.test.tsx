import { render, screen } from '@testing-library/react';
import HeaderLayout from 'components/Layout/Header';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useLocation: () => ({
    pathname: '/favourites',
  }),
}));

describe('Test Header Component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <HeaderLayout />
      </BrowserRouter>,
    );
  });

  test('Default active menu', () => {
    const favouriteItem = screen.getByText('List favourite spells').closest('li');
    const homeItem = screen.getByText('List spells').closest('li');
    expect(favouriteItem).toHaveClass('ant-menu-item-selected');
    expect(homeItem).not.toHaveClass('ant-menu-item-selected');
  });
});
