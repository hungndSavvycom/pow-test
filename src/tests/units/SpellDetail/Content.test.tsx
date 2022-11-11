import { render, screen } from '@testing-library/react';
import { spellDetail } from 'assets/data/spells';
import SpellContent from 'components/SpellDetail/Content';

Object.defineProperty(window, 'matchMedia', {
  value: () => {
    return {
      matches: false,
      addListener: () => {},
      removeListener: () => {},
    };
  },
});
describe('Test Content detail component', () => {
  test('Is loading component', () => {
    render(<SpellContent loading isError={false} />);

    const loading = screen.getByTestId('loading-detail-spell');

    expect(loading).toBeInTheDocument();
  });

  test('Is Error', () => {
    render(<SpellContent loading={false} isError />);

    const empty = screen.getByTestId('empty-detail-spell');

    expect(empty).toBeInTheDocument();
  });

  test('Exist data', () => {
    render(<SpellContent item={spellDetail} loading={false} isError={false} />);

    const spellClass = screen.getByTestId('spell-class');
    const spellOverall = screen.getByTestId('spell-overall');
    const spellIntro = screen.getByTestId('spell-introduction');

    expect(spellClass).toBeInTheDocument();
    expect(spellOverall).toBeInTheDocument();
    expect(spellIntro).toBeInTheDocument();
  });
});
