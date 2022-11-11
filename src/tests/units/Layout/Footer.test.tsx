import { render, screen } from '@testing-library/react';
import FooterLayout from 'components/Layout/Footer';

describe('Test Footer Component', () => {
  beforeEach(() => {
    render(<FooterLayout />);
  });

  test('Exist text', () => {
    const footer = screen.getByTestId('footer');
    expect(footer).toHaveTextContent('Design Created by SVC');
  });
});
