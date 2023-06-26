import React from 'react';
import { media, style } from 'typestyle';

import { maxWidth } from '../consts';

const dividerStyle = style(
  {
    borderLeft: '1px solid var(--neutral-300, #E7EAEB)',
    height: '64px',
    margin: '0 16px',
  },
  media({ maxWidth }, { display: 'none' })
);

export function Divider() {
  return <div className={dividerStyle}></div>;
}
