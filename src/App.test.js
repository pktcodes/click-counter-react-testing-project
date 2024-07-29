import React from 'react';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({ adapter: new Adapter() });

test('renders without error', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find('[data-test="component-app"]');
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {});

test('render counter element', () => {});

test('counter starts at 0 ', () => {});

test('counter increments on user action', () => {});
