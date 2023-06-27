import { generatePages, getData } from '../../src/hooks/useFetchArticles';

function getUrl(year: number, month: number, day: number, language: string = 'en') {
  return `https://wikimedia.org/api/rest_v1/metrics/pageviews/top/${language}.wikipedia/all-access/${year}/${month
    .toString()
    .padStart(2, '0')}/${day.toString().padStart(2, '0')}`;
}

describe('useFetchArticles', () => {
  it('gets wikipedia articles', async () => {
    const url = getUrl(2021, 1, 1);

    const articles = await fetch(url).then((res) => res.json());
    const [articles2, error] = await getData(url);

    expect(articles.items[0].articles).toEqual(articles2);
  });

  it('handles invalid urls', async () => {
    const url = getUrl(2021, 1, 1, 'invalid');

    const [articles, error] = await getData(url);

    expect(articles).toBeUndefined();
    expect(error).toBeDefined();
  });

  it('generates pages', async () => {
    const url = getUrl(2021, 1, 1);
    const [articles, error] = await getData(url);

    expect(articles).toHaveLength(1000);

    [25, 50, 75, 100, 200].forEach((size) => {
      const pages = generatePages(size, articles);

      expect(pages).toBeDefined();
      expect(pages).toHaveLength(Math.ceil(articles!.length / size));
      expect(pages![0]).toHaveLength(size);
    });
  });
});
