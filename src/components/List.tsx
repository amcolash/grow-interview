import { MenuItem } from '@szhsin/react-menu';
import React from 'react';
import { style } from 'typestyle';

interface ListProps {
  items: string[];
}

export const ListStyle = style({
  display: 'flex',
  width: '200px',
  padding: '32px 16px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '24px',
  borderRadius: '24px',
  background: 'var(--neutral-000, #FFF)',
  boxShadow: '0px 4px 24px 0px rgba(0, 0, 0, 0.12)',
  userSelect: 'none',
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
