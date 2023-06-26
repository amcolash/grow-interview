import { MenuItem } from '@szhsin/react-menu';
import React from 'react';
import { style } from 'typestyle';

interface ListProps {
  items: string[];
}

export const ListStyle = style({
  width: '200px',
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
  return props.items.map((i) => (
    <MenuItem value={i} className={itemStyle} key={i}>
      {i}
    </MenuItem>
  ));
}
