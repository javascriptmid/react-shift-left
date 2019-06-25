import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function AnswerResultTitle({ isCorrect }) {
  return (
    <Typography
      align="center"
      style={{ color: isCorrect ? 'green' : 'red' }}
      variant="h4"
    >
      {isCorrect ? 'CORRECTO!' : 'FALLASTE!'}
    </Typography>
  );
}
