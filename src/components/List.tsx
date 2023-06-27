import { MenuItem } from '@szhsin/react-menu';
import React from 'react';
import { style } from 'typestyle';

interface ListProps {
  items: string[] | { name: string; value: string }[];
}

export const ListStyle = style({
  width: '200px',
  maxHeight: 'min(400px, 100vh - 200px)',
  overflowY: 'auto',
});

const itemStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'stretch',
  color: 'var(--text-primary, #020202)',
  textAlign: 'center',
  fontSize: '16px',
  fontFamily: 'Poppins',
  lineHeight: '24px',

  $nest: {
    '&:hover': {
      background: 'var(--neutral-100, #F5F7F7)',
      border: 'none',
    },
  },
});

export function List(props: ListProps) {
  return props.items.map((i) => {
    const name = typeof i === 'string' ? i : i.name;
    const value = typeof i === 'string' ? i : i.value;

    return (
      <MenuItem value={value} className={itemStyle} key={value} data-testid="list-item">
        {name}
      </MenuItem>
    );
  });
}
