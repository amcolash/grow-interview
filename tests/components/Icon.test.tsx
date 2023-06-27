import { render } from '@testing-library/react';
import React from 'react';

import { ReactComponent as ListIcon } from '../../src/icons/list.svg';

import { Icon } from '../../src/components/Icon';

describe('Icon', () => {
  it('renders', () => {
    const { asFragment } = render(
      <Icon>
        <ListIcon />
      </Icon>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
