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
  const [error, setError] = React.useState<any>();

  React.useEffect(() => {
    getData(url).then(([articles, error]) => {
      setArticles(articles);
      setError(error);
    });
  }, [url]);

  return { articles, error };
}

export async function getData(url: string): Promise<[articles: ArticleData[] | undefined, error: any]> {
  if (!url || url.length === 0) return [undefined, undefined];

  if (CACHE[url]) return [CACHE[url].items[0].articles, undefined];

  const [articles, error] = await fetch(url)
    .then((res) => res.json())
    .then((articles: APIResponse) => {
      CACHE[url] = articles;

      if (!articles.items) throw `Could not get articles for ${url}\n${(articles as any).detail}`;

      return [articles.items[0].articles, undefined];
    })
    .catch((err) => {
      console.error(err);
      return [undefined, err];
    });

  return [articles, error];
}

export function generatePages(pageSize: number, articles?: ArticleData[]): ArticleData[][] | undefined {
  if (!articles) return undefined;

  const pages = [];
  for (let i = 0; i < articles.length; i += pageSize) {
    pages.push(articles.slice(i, i + pageSize));
  }

  return pages;
}
