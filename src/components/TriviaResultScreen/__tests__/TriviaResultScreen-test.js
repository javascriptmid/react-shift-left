import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import renderer from 'react-test-renderer';

import TriviaResultScreen from '../TriviaResultScreen';

describe('<TriviaResultScreen />', () => {
  it('display as winner', () => {
    const location = {
      state: {
        isWinner: true,
      },
    };

    const component = renderer.create(
      <TriviaResultScreen location={location} />
    );

    const textTree = component.root.findByType(Typography);
    expect(textTree.props.children).toBe('Soy intelectual muy inteligente!');
  });

  it('display as looser', () => {
    const location = {
      state: {
        isWinner: false,
      },
    };

    const component = renderer.create(
      <TriviaResultScreen location={location} />
    );

    const textTree = component.root.findByType(Typography);
    expect(textTree.props.children).toBe(
      'Eres tonto como una piedra y feo como una blasfemia'
    );
  });

  it('restarts the trivia', () => {
    const history = {
      push: jest.fn(),
    };

    const location = {
      state: {
        isWinner: true,
      },
    };

    const component = renderer.create(
      <TriviaResultScreen location={location} history={history} />
    );

    const buttonTree = component.root.findByType(Button);

    buttonTree.props.onClick();
    expect(history.push).toBeCalledWith('/');
  });
});
