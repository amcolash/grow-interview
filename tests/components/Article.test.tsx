import { render } from '@testing-library/react';
import React from 'react';

import { Article } from '../../src/components/Article';

describe('Article', () => {
  it('renders', () => {
    const { asFragment } = render(
      <Article article={{ article: 'Test Article', rank: 1, views: 123456789 }} index={1} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
