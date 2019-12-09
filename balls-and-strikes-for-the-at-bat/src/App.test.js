import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('There is a Balls Count for At-Bat', () => {
  const { getByTestId } = render(<App />);
  getByTestId(/balls-info/i);
});

test('There is a Strike Count for At-Bat', () => {
  const { getByTestId } = render(<App />);
  getByTestId(/strick-info/i);
});
