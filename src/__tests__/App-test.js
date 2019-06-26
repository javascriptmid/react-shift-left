import React from 'react';
import App from '../App';

import renderer from 'react-test-renderer';

describe('<App />', () => {
  it('renders correctly', () => {
    renderer.create(<App />);
  });

  it('renders correctly 2', () => {
    renderer.create(<App />);
  });
});
