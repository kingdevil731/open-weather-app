import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
// Component: HumidityCard
import HumidityCard from '../components/TodayHighlights/HumidityCard';

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

it('renders the HumidityCard Component', () => {
  act(() => {
    render(<HumidityCard humidity={69} />, container);
  });
  expect(container.querySelector('div').textContent).toContain('69%');

  act(() => {
    render(<HumidityCard humidity={38} />, container);
  });
  expect(container.querySelector('div').textContent).toContain('38%');
});
