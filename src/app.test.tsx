import { render, screen } from '@testing-library/react';
import { Provider, CombinedError } from 'urql';
import { Client } from 'urql/core';
import { fromValue } from 'wonka';
import { countries } from './countries.mock';
import App from './app';

describe('App', () => {
  it('renders loading state', () => {
    render(<App />);
    expect(screen.getAllByTestId('skeleton-item')).not.toBe(null);
  });

  it('renders error state', () => {
    const mockClient = {
      executeQuery: () =>
        fromValue({
          error: new CombinedError({
            networkError: Error('someting went wrong'),
          }),
        }),
    } as unknown as Client;

    render(
      <Provider value={mockClient}>
        <App />
      </Provider>,
    );
    expect(screen.queryByTestId('country-list')).toBe(null);
    expect(screen.getByTestId('country-list-error')).not.toBe(null);
  });

  it('renders list from query ', () => {
    const mockClient = {
      executeQuery: () =>
        fromValue({
          data: { countryResolver: countries },
        }),
    } as unknown as Client;

    render(
      <Provider value={mockClient}>
        <App />
      </Provider>,
    );

    expect(screen.getByTestId('country-list')).not.toBe(null);
    expect(screen.queryByTestId('skeleton-item')).toBe(null);
    expect(screen.queryAllByTestId('country-item')).not.toBe(null);
  });
});
