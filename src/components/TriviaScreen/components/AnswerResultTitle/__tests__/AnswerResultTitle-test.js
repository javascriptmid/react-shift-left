import React from 'react';
import renderer from 'react-test-renderer';

import AnswerResultTitle from '../AnswerResultTitle';

describe('<AnswerResultTitle />', () => {
  it('renders CORRECTO!', () => {
    const component = renderer.create(<AnswerResultTitle isCorrect />);
    const tree = component.toJSON();
    const text = tree.children[0];
    expect(text).toBe('CORRECTO!');
    expect(tree.props.style.color).toBe('green');
  });

  it('renders FALLASTE!', () => {
    const component = renderer.create(<AnswerResultTitle isCorrect={false} />);
    const tree = component.toJSON();
    const text = tree.children[0];
    expect(text).toBe('FALLASTE!');
    expect(tree.props.style.color).toBe('red');
  });
});
