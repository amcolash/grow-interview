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

export function useFetchArticles(date: Date) {
  const [articles, setArticles] = React.useState<ArticleData[]>();
  const [error, setError] = React.useState();

  React.useEffect(() => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    const url = `https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/${year}/${month}/${day}`;
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
  }, [date]);

  return { articles, error };
}
