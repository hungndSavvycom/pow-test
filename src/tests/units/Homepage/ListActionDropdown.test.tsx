import { fireEvent, render, screen } from '@testing-library/react';
import { spellList } from 'assets/data/spells';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ListActionDropdown from 'commons/Dropdown/ListActionDropdown';

const mockStore = configureMockStore();

describe('Test ListActionDropdown', () => {
  const store = mockStore({
    spell: {
      favouriteSpells: spellList.results.slice(0, 4),
    },
  });
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ListActionDropdown item={spellList.results[0]} />
        </Provider>
      </BrowserRouter>,
    );
  });

  test('Exist text', () => {
    const button = screen.getByTestId('action-button');
    const favItem = screen.getByTestId('favourite-menu');
    fireEvent.click(button);

    expect(favItem).toHaveTextContent('Remove from Favourite');
  });
});
