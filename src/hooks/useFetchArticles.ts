import React from 'react';

export interface ArticleData {
  article: string;
  views: number;
  rank: number;
}

interface APIResponse {
  items: [
    {
      project: string;
      access: string;
      year: string;
      month: string;
      day: string;
      articles: ArticleData[];
    }
  ];
}

// Cache API responses for the session to reduce redundant requests
const CACHE: { [url: string]: APIResponse } = {};

export function useFetchArticles(url: string) {
  const [articles, setArticles] = React.useState<ArticleData[]>();
  const [error, setError] = React.useState();

  React.useEffect(() => {
    if (!url || url.length === 0) return;

    if (CACHE[url]) {
      setArticles(CACHE[url].items[0].articles);
      setError(undefined);

      return;
    }

    fetch(url)
      .then((res) => res.json())
      .then((articles: APIResponse) => {
        CACHE[url] = articles;

        setArticles(articles.items[0].articles);
        setError(undefined);
      })
      .catch((err) => {
        console.error(err);

        setArticles(undefined);
        setError(err);
      });
  }, [url]);

  return { articles, error };
}
