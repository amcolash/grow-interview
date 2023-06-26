import { Menu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/transitions/slide.css';
import React, { FormEvent, MouseEventHandler } from 'react';
import { classes, media, style } from 'typestyle';

import { ReactComponent as ChevronDown } from '../icons/chevron-down.svg';
import { ReactComponent as ChevronUp } from '../icons/chevron-up.svg';

import { maxWidth } from '../consts';

interface DropdownWithIconProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  children: React.ReactNode;
  onChange?: (value: any) => void;
  menuClassName?: string;
}

const wrapperStyle = style(
  {
    display: 'flex',
    padding: '12px',
    alignItems: 'center',
    gap: '24px',
    flex: '1 0 0',
    fontFamily: 'Poppins',
    borderRadius: '100px',
    userSelect: 'none',
    border: 'none',
    background: 'none',
    minWidth: '220px',

    $nest: {
      '&:hover, &:active': {
        background: 'var(--neutral-100, #F5F7F7)',
      },
      '.text': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '2px',
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
  },
  media({ maxWidth }, { padding: '2px' })
);

const menuStyle = style({
  display: 'flex',
  padding: '32px 16px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '24px',
  borderRadius: '24px',
  background: 'var(--neutral-000, #FFF)',
  boxShadow: '0px 4px 24px 0px rgba(0, 0, 0, 0.12)',
  userSelect: 'none',
});

export function DropdownWithIcon(props: DropdownWithIconProps) {
  return (
    <Menu
      menuButton={({ open }) => <MenuButton {...props} open={open} />}
      onItemClick={(event) => {
        if (props.onChange) props.onChange(event.value);
      }}
      menuClassName={classes(menuStyle, props.menuClassName)}
      gap={10}
      transition
    >
      {props.children}
    </Menu>
  );
}

/** Internal Button Component */
interface MenuButtonProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  open: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const MenuButton = React.forwardRef<HTMLButtonElement, MenuButtonProps>(function Internal(props, ref) {
  return (
    <button className={wrapperStyle} ref={ref} onClick={props.onClick}>
      {props.icon}

      <div className="text">
        <div className="label">
          <label>{props.label}</label>
          {props.open ? <ChevronUp /> : <ChevronDown />}
        </div>

        {props.value}
      </div>
    </button>
  );
});
