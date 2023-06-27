import { render } from '@testing-library/react';
import React from 'react';

import { ReactComponent as ListIcon } from '../../src/icons/list.svg';

import { DropdownWithIcon } from '../../src/components/DropdownWithIcon';
import { Icon } from '../../src/components/Icon';

describe('DropdownWithIcon', () => {
  it('renders', () => {
    const { asFragment } = render(
      <DropdownWithIcon
        icon={
          <Icon>
            <ListIcon />
          </Icon>
        }
        label="Test label"
        value="Test value"
      >
        Test content
      </DropdownWithIcon>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
