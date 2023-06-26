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

export function useFetchArticles(url: string) {
  const [articles, setArticles] = React.useState<ArticleData[]>();
  const [error, setError] = React.useState();

  React.useEffect(() => {
    if (!url || url.length === 0) return;

    fetch(url)
      .then((res) => res.json())
      .then((articles: APIResponse) => {
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
