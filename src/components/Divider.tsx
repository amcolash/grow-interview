import React from 'react';
import { style } from 'typestyle';

const dividerStyle = style({
  borderLeft: '1px solid var(--neutral-300, #E7EAEB)',
  height: '64px',
  margin: '0 16px',
});

export function Divider() {
  return <div className={dividerStyle}></div>;
}
