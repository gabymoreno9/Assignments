import React from 'react';
import App from './App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('renders learn react link', () => {
  const app = shallow(<App />);
  expect(app.find('h1').text()).toEqual("Tweeter");
});

test('renders learn react link', () => {
  const app = shallow(<App />);
  expect(app.find('h1').text()).toEqual("Tweeter");
});