import React from 'react';
import { style } from 'typestyle';

interface CardProps {
  children: React.ReactNode;
}

const cardListStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  padding: '32px',

  borderRadius: '16px',
  background: '#FFF',
  boxShadow: '0px 2px 0px 1px rgba(5, 9, 13, 0.06)',
});

export function Card(props: CardProps) {
  return <div className={cardListStyle}>{props.children}</div>;
}
