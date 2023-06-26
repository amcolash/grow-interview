import React from 'react';
import { media, style } from 'typestyle';

import { ReactComponent as CalendarIcon } from '../icons/calendar.svg';
import { ReactComponent as ListIcon } from '../icons/list.svg';

import { maxWidth } from '../consts';
import { Button } from './Button';
import { Calendar } from './Calendar';
import { Divider } from './Divider';
import { DropdownWithIcon } from './DropdownWithIcon';
import { Icon } from './Icon';
import { List, ListStyle } from './List';

interface ActionBarProps {
  searchDate: Date;
  pageSize: number;

  setSearchDate: (date: Date) => void;
  setPageSize: (num: number) => void;
  setUrl: (url: string) => void;
}

const barStyle = style(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
    minHeight: '96px',
    padding: '16px',
    gap: '16px',

    borderRadius: '100px',
    background: 'var(--neutral-000, #FFF)',
    boxShadow: '0px 2px 0px 1px rgba(5, 9, 13, 0.06)',
  },
  media(
    { maxWidth },
    {
      borderRadius: 0,
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '24px',
      padding: '24px',
    }
  )
);

export function ActionBar(props: ActionBarProps) {
  return (
    <div className={barStyle}>
      <DatePicker value={props.searchDate} onChange={(date) => props.setSearchDate(date)} />
      <Divider />
      <NumResults value={props.pageSize} onChange={(num) => props.setPageSize(num)} />
      <Button
        onClick={() => {
          const date = props.searchDate;
          const year = date.getFullYear();
          const month = (date.getMonth() + 1).toString().padStart(2, '0');
          const day = date.getDate().toString().padStart(2, '0');

          const url = `https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/${year}/${month}/${day}`;

          props.setUrl(url);
        }}
      >
        Search
      </Button>
    </div>
  );
}

interface DatePickerProps {
  value: Date;
  onChange: (date: Date) => void;
}

function DatePicker(props: DatePickerProps) {
  return (
    <DropdownWithIcon
      icon={
        <Icon style={{ background: 'var(--avocado-200, #ECF1E0)', color: 'var(--brand-green-500, #025B4B)' }}>
          <CalendarIcon />
        </Icon>
      }
      label="Date"
      value={props.value.toLocaleDateString(undefined, {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })}
      // onChange={(value) => props.onChange(new Date(value))}
    >
      <Calendar date={props.value} onChange={(date) => props.onChange(date)} />
    </DropdownWithIcon>
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
