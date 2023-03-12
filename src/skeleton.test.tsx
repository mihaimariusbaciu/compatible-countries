import { render, screen } from '@testing-library/react';

import Skeleton from './skeleton';

describe('Skeleton', () => {
  it('renders default number of items ', () => {
    render(<Skeleton />);

    const elements = screen.getAllByTestId('skeleton-item');
    expect(elements.length).toEqual(4);
  });
  it('renders specific number of items', () => {
    const count = 5;
    render(<Skeleton count={count} />);

    const elements = screen.getAllByTestId('skeleton-item');
    expect(elements.length).toEqual(count);
  });
});
