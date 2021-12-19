import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
// Component: SmallInfoCard
import SmallInfoCard from '../components/SmallInfoCard';

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

it('renders SmallInfoCard Component with different props', () => {
  act(() => {
    render(<SmallInfoCard title='Temperature' value='28.84°C' />, container);
  });
  expect(container.querySelector('h3').textContent).toBe('Temperature');
  expect(container.querySelector('div').textContent).toContain('28.84°C');

  act(() => {
    render(<SmallInfoCard title='Humidity' value='70%' />, container);
  });
  expect(container.querySelector('h3').textContent).toBe('Humidity');
  expect(container.querySelector('div').textContent).toContain('70%');
});
