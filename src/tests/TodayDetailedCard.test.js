import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
// Component: TodayDetailedCard
import TodayDetailedCard from '../components/TodayDetailedCard';

// declare container variable with null as initial value
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

it('Should Render 2 Different Components', () => {
  /*
    1. Render the TodayDetailedCard component with Sunrise and Sunset Data
    */
  act(() => {
    render(
      <TodayDetailedCard sunrise={1639882671} sunset={1639930651} />,
      container,
    );
  });
  // Assert that it renders the component as expected
  // First is Sunrise, Second is Sunset
  expect(container.querySelector('div').textContent).toContain('4:57 AM');
  expect(container.querySelector('div').textContent).toContain('6:17 PM');

  /*
    2. Render the TodayDetailedCard component with Sunrise and Sunset Data
    */
  act(() => {
    render(
      <TodayDetailedCard
        minTemp={21.8}
        maxTemp={27.04}
        mornTemp={21.87}
        dayTemp={25.8}
        eveTemp={26.41}
        nightTemp={24.61}
      />,
      container,
    );
  });
  // Assert that it renders the component as expected
  expect(container.querySelector('div').textContent).toContain('21.8');
  expect(container.querySelector('div').textContent).toContain('27.04');
  expect(container.querySelector('div').textContent).toContain('21.87');
  expect(container.querySelector('div').textContent).toContain('25.8');
  expect(container.querySelector('div').textContent).toContain('26.41');
  expect(container.querySelector('div').textContent).toContain('24.61');
});
