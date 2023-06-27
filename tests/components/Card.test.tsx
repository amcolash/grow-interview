import { render } from '@testing-library/react';
import React from 'react';

import { Card } from '../../src/components/Card';

describe('Card', () => {
  it('renders', () => {
    const { asFragment } = render(<Card>A card with some content</Card>);
    expect(asFragment()).toMatchSnapshot();
  });
});
