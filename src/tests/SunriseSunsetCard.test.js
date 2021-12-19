import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
// Component: SunriseSunsetCard
import SunriseSunsetCard from '../components/TodayHighlights/SunriseSunsetCard';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders SunriseSunsetCard Component', () => {
  act(() => {
    render(
      <SunriseSunsetCard sunrise={1639882671} sunset={1639930651} />,
      container,
    );
  });
  // First is Sunrise, Second is Sunset
  expect(container.querySelector('div').textContent).toContain('4:57 AM');
  expect(container.querySelector('div').textContent).toContain('6:17 PM');
});
