import React from 'react';
import { style } from 'typestyle';

const navStyle = style({
  display: 'flex',
  width: '100%',
  height: '80px',
  padding: '16px 48px',
  alignItems: 'center',
  gap: '8px',
  background: 'var(--white)',
  boxShadow: '0px 2px 0px 0px rgba(2, 91, 75, 0.10)',
});

export function Navigation() {
  return <nav className={navStyle}></nav>;
}
