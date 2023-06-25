import React from 'react';
import { style } from 'typestyle';

import { ReactComponent as ChevronDown } from '../icons/chevron-down.svg';

interface DropdownWithIconProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const wrapperStyle = style({
  display: 'flex',
  padding: '12px',
  alignItems: 'center',
  gap: '24px',
  flex: '1 0 0',
  fontFamily: 'Poppins',

  $nest: {
    '.label': {
      color: 'var(--neutral-500, #A7AAAB)',
      fontSize: '12px',
      fontWeight: '500',
      lineHeight: '16px',
      letterSpacing: '0.6px',

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
    <div className={wrapperStyle}>
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
