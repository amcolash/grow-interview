import { render } from '@testing-library/react';
import React from 'react';

import { Button } from '../../src/components/Button';

describe('Button', () => {
  it('renders', () => {
    const { asFragment } = render(<Button>Inner Text</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
});
