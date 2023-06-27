import React from 'react';

import { ArticleData } from '../hooks/useFetchArticles';
import { Article } from './Article';
import { Card } from './Card';

interface ResultsProps {
  url?: string;
  error?: string;
  currentPage?: ArticleData[];
}

export function Results(props: ResultsProps) {
  const { currentPage, error, url } = props;

  if (!url || url.length === 0) return null;
  if (error || !currentPage)
    return (
      <Card testId="search-results">
        <div style={{ textAlign: 'center' }} data-testid="results-error">
          Something went wrong fetching articles!
          <pre>{error}</pre>
        </div>
      </Card>
    );

  return (
    <Card testId="search-results">
      {currentPage.map((article) => (
        <Article key={article.rank} article={article} />
      ))}
    </Card>
  );
}
