import React from 'react';
import { style } from 'typestyle';

const barStyle = style({
  display: 'flex',
  width: '100%',
  height: '96px',
  padding: '16px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '16px',

  borderRadius: '100px',
  background: 'var(--neutral-000, #FFF)',
  boxShadow: '0px 2px 0px 1px rgba(5, 9, 13, 0.06)',
});

export function ActionBar() {
  return <div className={barStyle}></div>;
}
