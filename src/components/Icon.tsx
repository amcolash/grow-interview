import React from 'react';
import { style } from 'typestyle';

interface IconProps {
  children: React.ReactNode;
  style: React.CSSProperties;
}

const iconStyle = style({
  display: 'flex',
  height: '48px',
  padding: '16px 14.5px 16px 13.5px',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '100px',
});

export function Icon(props: IconProps) {
  return (
    <div className={iconStyle} style={props.style}>
      {props.children}
    </div>
  );
}
