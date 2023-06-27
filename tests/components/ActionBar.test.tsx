import { render } from '@testing-library/react';
import React from 'react';

import { ActionBar } from '../../src/components/ActionBar';

describe('ActionBar', () => {
  it('renders', () => {
    const { asFragment } = render(
      <ActionBar
        searchDate={new Date('6/26/2023')}
        language="gb"
        pageSize={100}
        setLanguage={() => {}}
        setPageSize={() => {}}
        setSearchDate={() => {}}
        setUrl={() => {}}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
