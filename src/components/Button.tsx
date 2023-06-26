import React, { ButtonHTMLAttributes } from 'react';
import { media, style } from 'typestyle';

import { maxWidth } from '../consts';

const buttonStyle = style(
  {
    display: 'flex',
    width: '160px',
    padding: '12px 24px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
    flexShrink: '0',
    alignSelf: 'stretch',
    borderRadius: '100px',
    background: 'var(--brand-green-500, #025b4b)',
    border: 'none',
    color: 'var(--neutral-000, #fff)',
    textAlign: 'center',
    fontSize: '16px',
    fontFamily: 'Poppins',
    fontWeight: '500',
    lineHeight: '24px',
    letterSpacing: '-0.32px',
  },
  media({ maxWidth }, { width: '100%' })
);

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} className={buttonStyle} />;
}