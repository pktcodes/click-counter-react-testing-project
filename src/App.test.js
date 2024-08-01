import React from 'react';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({ adapter: new Adapter() });

/**
 * Factory function to create a shallowWrapper for the App Component
 * @@function setup
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(<App />);
};

const findByTestAttribute = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`);
};

test('renders app component without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttribute(wrapper, 'app-component');
  expect(appComponent.length).toBe(1);
});

test('renders counter heading', () => {
  const wrapper = setup();
  const counterHeading = findByTestAttribute(wrapper, 'counter-heading');
  expect(counterHeading.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = setup();
  const incrementButton = findByTestAttribute(wrapper, 'increment-button');
  expect(incrementButton.length).toBe(1);
});

test('counter starts at 0', () => {
  const wrapper = setup();
  const count = findByTestAttribute(wrapper, 'count-value').text();
  expect(count).toBe('0');
});

test('counter increments on user action', () => {
  const wrapper = setup();

  // Find the Button
  const incrementButton = findByTestAttribute(wrapper, 'increment-button');

  // Click the Button
  incrementButton.simulate('click');

  // Check Counter Value has been increased
  const count = findByTestAttribute(wrapper, 'count-value').text();
  expect(count).toBe('1');
});
