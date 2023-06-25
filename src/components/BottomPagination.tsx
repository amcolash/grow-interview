import React from 'react';
import ReactPaginate from 'react-paginate';
import { style } from 'typestyle';

import { ReactComponent as ChevronLeft } from '../icons/chevron-left.svg';
import { ReactComponent as ChevronRight } from '../icons/chevron-right.svg';

interface BottomPaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (selectedItem: { selected: number }) => void;
}

const pageListStyle = style({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '8px',
  listStyle: 'none',
  margin: 0,
  padding: 0,

  $nest: {
    '& a': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '40px',
      height: '40px',
      padding: '10px',
      color: 'var(--neutral-900, #05090D)',
      fontFamily: 'Poppins',
    },
    '& li': {
      border: '1px solid var(--neutral-400, #D4D8D9)',
      background: 'var(--neutral-000, #FFF)',
      borderRadius: '100px',
      userSelect: 'none',

      $nest: {
        '&.disabled': {
          background: 'var(--neutral-400, #D4D8D9)',
        },
        '&.disabled > a': {
          color: 'var(--neutral-600, #737680)',
        },
        '&:not(.disabled,.selected):hover': {
          background: 'var(--neutral-300, #e7eaeb)',
        },
        '&.selected': {
          background: 'var(--avocado-300, #E0E9CB)',
        },
        '&.selected > a': {
          color: 'var(--brand-green-500, #025B4B)',
        },
      },
    },
  },
});

export function BottomPagination(props: BottomPaginationProps) {
  return (
    <ReactPaginate
      className={pageListStyle}
      breakLabel="..."
      nextLabel={<ChevronRight />}
      onPageChange={props.onPageChange}
      pageCount={props.totalPages}
      previousLabel={<ChevronLeft />}
      renderOnZeroPageCount={null}
    />
  );
}
