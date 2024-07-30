import React from 'react';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({ adapter: new Adapter() });

test('renders without error', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find('[data-test="app-component"]');
  expect(appComponent.length).toBe(1);
});

test('render counter heading', () => {
  const wrapper = shallow(<App />);
  const counterHeading = wrapper.find('[data-test="counter-heading"]');
  expect(counterHeading.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = shallow(<App />);
  const incrementButton = wrapper.find('[data-test="increment-button"]');
  expect(incrementButton.length).toBe(1);
});

test('counter starts at 0 ', () => {});

test('counter increments on user action', () => {});
