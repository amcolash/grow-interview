import React from 'react';
import { CaptionProps, DayPicker, useNavigation } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { cssRule, style } from 'typestyle';

import { ReactComponent as ChevronLeft } from '../icons/chevron-left.svg';
import { ReactComponent as ChevronRight } from '../icons/chevron-right.svg';

interface CalendarProps {
  date: Date;
  onChange: (date: Date) => void;
}

cssRule('.rdp', {
  fontFamily: 'Poppins',
  margin: 0,
});

export function Calendar(props: CalendarProps) {
  return (
    <DayPicker
      mode="single"
      selected={props.date}
      onDayClick={(day) => props.onChange(day)}
      disabled={{ from: new Date(), to: new Date(9999, 12, 31) }}
      formatters={{
        formatWeekdayName: (weekday) =>
          weekday.toLocaleDateString(undefined, {
            weekday: 'short',
          }),
      }}
      styles={{
        head_cell: {
          fontWeight: 'normal',
          color: 'var(--neutral-500, #A7AAAB)',
          fontSize: '12px',
          lineHeight: '18px',
        },
        cell: {
          fontSize: '14px',
          lineHeight: '22px',
        },
      }}
      components={{
        Caption: CustomCaption,
      }}
      modifiersStyles={{
        selected: {
          color: 'var(--brand-green-500, #025B4B)',
          background: 'var(--ivy-300, #B3CEC9)',
          fontWeight: '500',
        },
      }}
    />
  );
}

const captionStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '32px',

  $nest: {
    '& button': {
      border: 'none',
      background: 'none',
      display: 'flex',
      padding: '0',
      alignItems: 'center',
      width: '24px',
      height: '24px',
      justifyContent: 'center',
      borderRadius: '100%',
    },
    '& button:hover': {
      background: 'var(--neutral-300, #e7eaeb)',
    },
    '& label': {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: '500',
    },
  },
});

function CustomCaption(props: CaptionProps) {
  const { previousMonth, nextMonth, goToMonth, displayMonths } = useNavigation();
  const caption = props.displayMonth.toLocaleDateString(undefined, {
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className={captionStyle}>
      <button
        onClick={() => {
          if (!previousMonth) return;
          goToMonth(previousMonth);
        }}
      >
        <ChevronLeft />
      </button>
      <label>{caption}</label>
      <button
        onClick={() => {
          if (!nextMonth) return;
          goToMonth(nextMonth);
        }}
        disabled={nextMonth ? nextMonth.getTime() > Date.now() : false}
      >
        <ChevronRight />
      </button>
    </div>
  );
}
