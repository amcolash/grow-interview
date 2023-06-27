import { render } from '@testing-library/react';
import React from 'react';

import { Calendar } from '../../src/components/Calendar';

describe('Calendar', () => {
  it('renders', () => {
    const { asFragment } = render(<Calendar date={new Date('6/26/2023')} onChange={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
