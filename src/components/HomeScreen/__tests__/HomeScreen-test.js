import React from 'react';
import { Link } from 'react-router-dom';

import HomeScreen from '../HomeScreen';

import renderer from 'react-test-renderer';

describe('<HomeScreen />', () => {
  it('starts trivia', () => {
    const component = renderer.create(<HomeScreen />);
    expect(component).toMatchSnapshot();
  });
});
