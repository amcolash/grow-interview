import React from 'react';
import { style } from 'typestyle';

interface ArticleProps {
  index: number;
  title: string;
  views: number;
}

const articleStyle = style({
  display: 'flex',
  padding: '24px',
  alignItems: 'center',
  gap: '20px',
  alignSelf: 'stretch',
  fontSize: '16px',
  lineHeight: '24px',

  borderRadius: '12px',
  border: '1px solid var(--neutral-300, #E7EAEB)',
  background: 'var(--white, #FFF)',

  $nest: {
    '& .index, & .views': {
      color: 'var(--neutral-500, #A7AAAB)',
    },
    '.title': {
      flex: 1,
    },
    '.views': {
      fontSize: '14px',
      fontFamily: 'Poppins',
      lineHeight: '16px',
    },
  },
});

export function Article(props: ArticleProps) {
  return (
    <article className={articleStyle}>
      <div className="index">{props.index}</div>
      <div className="title">{props.title}</div>
      <div className="views">{props.views.toLocaleString('en-US')} views</div>
    </article>
  );
}
