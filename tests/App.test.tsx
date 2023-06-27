import { render, screen, within } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';

import App from '../src/App';

describe('App', () => {
  it('renders', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders date: 5/26/2023, results: 75, language: de', async () => {
    const { asFragment } = render(<App />);
    const datePicker = screen.getByTestId('date-picker-button');
    act(() => datePicker.click());

    const calendar = screen.getByTestId('calendar');
    const monthHeader = screen.getByTestId('month-header');
    const previousMonth = screen.getByTestId('previous-month');

    while (monthHeader.textContent !== 'May 2023') {
      act(() => previousMonth.click());
    }

    const days = within(calendar).getAllByRole('button');
    const day = days.find((d) => d.textContent === '26');
    act(() => day?.click());

    const numResults = screen.getByTestId('num-results-picker-button');
    act(() => numResults.click());

    const numResultsMenu = screen.getByTestId('num-results-picker');
    const numResultsItem = within(numResultsMenu).getByText('75');
    act(() => numResultsItem.click());

    const language = screen.getByTestId('language-picker-button');
    act(() => language.click());

    const languageMenu = screen.getByTestId('language-picker');
    const languageItem = within(languageMenu).getByText('German');
    act(() => languageItem.click());

    const searchButton = screen.getByTestId('search-button');
    await act(async () => searchButton.click());

    // Wait for new data to render properly
    await screen.findAllByTestId('article', {}, { timeout: 5000 });

    expect(asFragment()).toMatchSnapshot();
  });
});
