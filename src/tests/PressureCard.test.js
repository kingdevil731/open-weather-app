import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
// Component: PressureCard
import PressureCard from '../components/TodayHighlights/PressureCard';

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

it('renders the PressureCard Component', () => {
  act(() => {
    render(<PressureCard pressure={1014} />, container);
  });
  expect(container.querySelector('div').textContent).toContain(
    'Pressure1014hPahigh 😄',
  );

  act(() => {
    render(<PressureCard pressure={500} />, container);
  });
  expect(container.querySelector('div').textContent).toContain(
    'Pressure500hPalow ☹️',
  );
});
