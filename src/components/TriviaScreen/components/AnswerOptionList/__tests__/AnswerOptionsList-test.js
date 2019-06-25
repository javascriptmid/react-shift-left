import React from 'react';
import Button from '@material-ui/core/Button';
import renderer from 'react-test-renderer';

import AnswerOptionList from '../AnswerOptionsList';

describe('<AnswerOptionList />', () => {
  it('handle option press', () => {
    const onOptionPress = jest.fn();
    const options = [
      {
        number: 1,
        text: 'test',
      },
    ];

    const component = renderer.create(
      <AnswerOptionList onOptionPress={onOptionPress} options={options} />
    );

    const buttonTree = component.root.findByType(Button);
    buttonTree.props.onClick();
  });
});
