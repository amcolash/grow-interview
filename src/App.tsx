import React, { useState } from 'react';
import { media, style } from 'typestyle';

import { ActionBar } from './components/ActionBar';
import { Article } from './components/Article';
import { BottomPagination } from './components/BottomPagination';
import { Card } from './components/Card';
import { Navigation } from './components/Navigation';
import { mobileWidth } from './consts';
import { generatePages, useFetchArticles } from './hooks/useFetchArticles';

const pageStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const contentStyle = style(
  {
    display: 'flex',
    width: 'calc(100% - 48px)',
    maxWidth: '950px',
    padding: '56px 0px 80px 0px',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '40px',
  },
  media({ maxWidth: mobileWidth }, { width: '100%' })
);

const mainStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  width: '100%',
});

const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

export default () => {
  const [searchDate, setSearchDate] = useState(yesterday);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(100);
  const [language, setLanguage] = useState('en');
  const [url, setUrl] = useState('');

  const { articles, error } = useFetchArticles(url);

  const pages = generatePages(pageSize, articles);

  return (
    <div className={pageStyle}>
      <Navigation />

      <div className={contentStyle}>
        <h1 style={{ margin: 0 }}>Top Wikipedia Articles</h1>

        <div className={mainStyle}>
          <ActionBar
            searchDate={searchDate}
            setSearchDate={setSearchDate}
            pageSize={pageSize}
            setPageSize={setPageSize}
            language={language}
            setLanguage={setLanguage}
            setUrl={setUrl}
          />

          {url && url.length > 0 && (
            <Card testId="search-results">
              {error && (
                <div style={{ textAlign: 'center' }} data-testid="results-error">
                  Something went wrong fetching articles!
                  <pre>{error}</pre>
                </div>
              )}

              {!error &&
                pages &&
                pages[page] &&
                pages[page].map((article, index) => (
                  <Article key={index} index={page * pageSize + index} article={article} />
                ))}
            </Card>
          )}
        </div>

        {!error && pages && (
          <BottomPagination
            currentPage={page}
            totalPages={pages.length}
            onPageChange={(selectedItem: { selected: number }) => setPage(selectedItem.selected)}
          />
        )}
      </div>
    </div>
  );
};
