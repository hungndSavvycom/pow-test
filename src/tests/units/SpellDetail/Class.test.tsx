import { render, screen } from '@testing-library/react';
import { spellDetail } from 'assets/data/spells';
import SpellClass from 'components/SpellDetail/Class';

describe('Test Spell Class component', () => {
  beforeEach(() => {
    render(<SpellClass item={spellDetail} />);
  });

  test('Exist text', () => {
    const classItemName = screen.getAllByTestId('class-item-name');
    classItemName.forEach((value) => {
      expect(value).toHaveTextContent('Wizard');
    });
  });
});
