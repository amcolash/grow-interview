import React, { forwardRef } from 'react';
import { style } from 'typestyle';

import { ReactComponent as ChevronDown } from '../icons/chevron-down.svg';

interface DropdownWithIconProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  ref?: React.Ref<HTMLDivElement>;
}

const wrapperStyle = style({
  display: 'flex',
  padding: '12px',
  alignItems: 'center',
  gap: '24px',
  flex: '1 0 0',
  fontFamily: 'Poppins',
  borderRadius: '100px',
  userSelect: 'none',

  $nest: {
    '&:hover': {
      background: 'var(--neutral-100, #F5F7F7)',
    },
    '.label': {
      color: 'var(--neutral-500, #A7AAAB)',
      fontSize: '12px',
      fontWeight: '500',
      lineHeight: '16px',
      letterSpacing: '0.6px',
      textTransform: 'uppercase',

      $nest: {
        label: {
          marginRight: '6px',
        },
      },
    },
    '.value': {
      color: 'var(--black, #000)',
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '-0.32px',
    },
  },
});

export function DropdownWithIcon(props: DropdownWithIconProps) {
  return (
    <div className={wrapperStyle} ref={props.ref}>
      {props.icon}

      <div>
        <div className="label">
          <label>{props.label}</label>
          <ChevronDown />
        </div>

        {props.value}
      </div>

      {/* {open && } */}
    </div>
  );
}
