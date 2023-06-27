import { render } from '@testing-library/react';
import React from 'react';

import { Divider } from '../../src/components/Divider';

describe('Divider', () => {
  it('renders', () => {
    const { asFragment } = render(<Divider />);
    expect(asFragment()).toMatchSnapshot();
  });
});
