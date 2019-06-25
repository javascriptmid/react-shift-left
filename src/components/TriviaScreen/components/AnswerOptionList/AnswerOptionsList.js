import React from 'react';
import Button from '@material-ui/core/Button';

export default function AnswerOptionList({ options, onOptionPress }) {
  const handleOptionPress = option => {
    return () => onOptionPress(option);
  };

  return options.map(option => (
    <Button
      variant="contained"
      color="secondary"
      onClick={handleOptionPress(option)}
      style={{ marginBottom: 12 }}
      key={option.number}
    >
      {option.text}
    </Button>
  ));
}
