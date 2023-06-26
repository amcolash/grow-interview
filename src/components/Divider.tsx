import React from 'react';
import { media, style } from 'typestyle';

import { mobileWidth } from '../consts';

const dividerStyle = style(
  {
    borderLeft: '1px solid var(--neutral-300, #E7EAEB)',
    height: '64px',
    margin: '0 16px',
  },
  media({ maxWidth: mobileWidth }, { display: 'none' })
);

export function Divider() {
  return <div className={dividerStyle}></div>;
}
