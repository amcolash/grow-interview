import { Menu } from '@szhsin/react-menu';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';

import { List } from '../../src/components/List';

const items = [
  { name: 'test', value: 'test-value' },
  { name: 'test2', value: 'test2-value' },
  { name: 'test3', value: 'test3-value' },
];

describe('List', () => {
  it('renders string items', () => {
    const stringItems = ['test', 'test2', 'test3'];

    const { asFragment } = render(
      <Menu menuButton={<button data-testid="menu-button">Menu Button</button>}>
        <List items={stringItems} />
      </Menu>
    );

    expect(asFragment()).toMatchSnapshot();

    act(() => screen.queryByTestId('menu-button')?.click());
    expect(screen.getAllByTestId('list-item')).toHaveLength(stringItems.length);
  });

  it('renders complex items', () => {
    const { asFragment } = render(
      <Menu menuButton={<button data-testid="menu-button">Menu Button</button>}>
        <List items={items} />
      </Menu>
    );

    expect(asFragment()).toMatchSnapshot();

    act(() => screen.queryByTestId('menu-button')?.click());
    expect(screen.getAllByTestId('list-item')).toHaveLength(items.length);
  });

  it('calls onItemClick when item is clicked', () => {
    let clickValue = '';

    render(
      <Menu
        menuButton={<button data-testid="menu-button">Menu Button</button>}
        onItemClick={({ value }) => (clickValue = value)}
      >
        <List items={items} />
      </Menu>
    );

    act(() => screen.queryByTestId('menu-button')?.click());
    act(() => screen.getAllByTestId('list-item')[0].click());

    expect(clickValue).toBe(items[0].value);
  });
});
