import { render } from '@testing-library/react';
import React from 'react';

import { BottomPagination } from '../../src/components/BottomPagination';

describe('BottomPagination', () => {
  it('renders on first page', () => {
    const { asFragment } = render(<BottomPagination currentPage={0} onPageChange={() => {}} totalPages={5} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders on third page', () => {
    const { asFragment } = render(<BottomPagination currentPage={2} onPageChange={() => {}} totalPages={5} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
