import React from 'react';
import renderer from 'react-test-renderer';

import TriviaScreen from '../TriviaScreen';
import { AnswerOptionList } from '../components';
import { LIMIT } from '../../../api';

describe('<TriviaScreen />', () => {
  it('render list and answer questions', () => {
    jest.useFakeTimers();

    const history = {
      push: jest.fn(),
    };

    let component;

    renderer.act(() => {
      component = renderer.create(<TriviaScreen history={history} />);
    });

    const answerOptionList = component.root.findByType(AnswerOptionList);

    for (let i = 0; i < LIMIT; i++) {
      renderer.act(() => {
        const option = answerOptionList.props.options[0];
        answerOptionList.props.onOptionPress(option);
        jest.runAllTimers();
      });
    }
  });
});
