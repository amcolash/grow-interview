import React from 'react';
import { style } from 'typestyle';

import { ArticleData } from '../hooks/useFetchArticles';

interface ArticleProps {
  article: ArticleData;
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
  const title = props.article.article.replace(/_/g, ' ');

  return (
    <article className={articleStyle} data-testid="article">
      <div className="index">{props.article.rank}</div>
      <div className="title">{title}</div>
      <div className="views">{props.article.views.toLocaleString('en-US')} views</div>
    </article>
  );
}
