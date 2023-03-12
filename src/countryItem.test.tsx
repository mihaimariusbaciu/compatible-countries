import { render, screen } from '@testing-library/react';

import CountryItem from './countryItem';
import { disabledCountry, enabledCountry } from './countries.mock';

describe('Country Item', () => {
  it('renders default number of items ', () => {
    render(<CountryItem country={{}} />);

    const elements = screen.queryByTestId('contry-item');
    expect(elements).toBe(null);
  });

  it('renders default number of items ', () => {
    render(<CountryItem country={disabledCountry} />);

    const elements = screen.getByTestId('country-item');
    expect(elements.querySelector('.bg-red-base')).not.toBe(null);
  });

  it('renders specific number of items', () => {
    render(<CountryItem country={enabledCountry} />);

    const elements = screen.getByTestId('country-item');
    expect(elements.querySelector('.bg-green-base')).not.toBe(null);
  });
});
