import React from 'react';
import { style } from 'typestyle';

import { ReactComponent as CalendarIcon } from '../icons/calendar.svg';
import { ReactComponent as ListIcon } from '../icons/list.svg';

import { Button } from './Button';
import { Divider } from './Divider';
import { DropdownWithIcon } from './DropdownWithIcon';
import { Icon } from './Icon';
import { List, ListStyle } from './List';

interface ActionBarProps {
  searchDate: Date;
  pageSize: number;

  setSearchDate: (date: Date) => void;
  setPageSize: (num: number) => void;
}

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

// 25, 50, 75, 100, 200 default to 100)
export function ActionBar(props: ActionBarProps) {
  return (
    <div className={barStyle}>
      <DropdownWithIcon
        icon={
          <Icon style={{ background: 'var(--avocado-200, #ECF1E0)', color: 'var(--brand-green-500, #025B4B)' }}>
            <CalendarIcon />
          </Icon>
        }
        label="Date"
        value={props.searchDate.toLocaleDateString(undefined, {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })}
      >
        <div>This is my dropdown</div>
      </DropdownWithIcon>

      <Divider />

      <NumResults value={props.pageSize} onChange={(num) => props.setPageSize(num)} />

      <Button>Search</Button>
    </div>
  );
}

interface NumResultsProps {
  value: number;
  onChange: (num: number) => void;
}

function NumResults(props: NumResultsProps) {
  return (
    <DropdownWithIcon
      icon={
        <Icon style={{ background: 'var(--marigold-200, #ECF1E0)', color: 'var(--brand-marigold-500, #E68A00)' }}>
          <ListIcon />
        </Icon>
      }
      label="Num Results"
      value={props.value.toString()}
      onChange={(value) => props.onChange(Number.parseInt(value))}
      menuClassName={ListStyle}
    >
      <List items={['25', '50', '75', '100', '200']} />
    </DropdownWithIcon>
  );
}
