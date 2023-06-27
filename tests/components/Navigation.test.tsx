import { render } from '@testing-library/react';
import React from 'react';

import { Navigation } from '../../src/components/Navigation';

describe('Navigation', () => {
  it('renders', () => {
    const { asFragment } = render(<Navigation />);
    expect(asFragment()).toMatchSnapshot();
  });
});
