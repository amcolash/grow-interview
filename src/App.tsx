import React from 'react';
import { style } from 'typestyle';
import { Navigation } from './components/Navigation';
import { BottomPagination } from './components/BottomPagination';
import { ActionBar } from './components/ActionBar';
import { Card } from './components/Card';
import { Article } from './components/Article';

const pageStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const contentStyle = style({
  display: 'flex',
  width: '800px',
  padding: '56px 0px 80px 0px',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '40px',
});

const mainStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  width: '100%',
});

export default () => (
  <div className={pageStyle}>
    <Navigation />

    <div className={contentStyle}>
      <h1>Top Wikipedia Articles</h1>

      <div className={mainStyle}>
        <ActionBar />

        <Card>
          <Article index={1} title="The Last of Us" views={12345} />
          <Article index={2} title="Chat GPT" views={123} />
        </Card>
      </div>

      <BottomPagination />
    </div>
  </div>
);
