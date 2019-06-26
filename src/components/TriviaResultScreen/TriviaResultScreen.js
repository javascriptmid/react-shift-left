import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Page from '../Page';
import Styles from './TriviaResultScreen.module.css';

export default function TriviaResultScreen({ history, location }) {
  const handleResetTrivia = () => {
    return history.push('/');
  };

  return (
    <Page id="trivia-result-screen">
      <div className={Styles.Content}>
        <Typography align="center" variant="h4">
          {location.state.isWinner
            ? 'Soy intelectual muy inteligente!'
            : 'Eres tonto como una piedra y feo como una blasfemia'}
        </Typography>

        <Button
          id="restart-trivia-button"
          variant="outlined"
          color="primary"
          onClick={handleResetTrivia}
        >
          VOLVER A COMENZAR
        </Button>
      </div>
    </Page>
  );
}
