import { render } from '@testing-library/react';
import React from 'react';

import { Results } from '../../src/components/Results';

describe('Results', () => {
  it('renders null by default', () => {
    const { asFragment } = render(<Results />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders errors', () => {
    const { asFragment } = render(<Results url="http://testurl.com" error="Something went wrong getting data" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders error (no page)', () => {
    const { asFragment } = render(<Results url="http://testurl.com" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders valid results', () => {
    const { asFragment } = render(
      <Results
        url="http://testurl.com"
        currentPage={[
          { article: 'Test1', rank: 1, views: 123456 },
          { article: 'Test2', rank: 2, views: 123 },
        ]}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
