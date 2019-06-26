import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';

import api from '../../api';
import Page from '../Page';
import { AnswerOptionList, AnswerResultTitle } from './components';
import Styles from './TriviaScreen.module.css';

export default function TriviaScreen({ history }) {
  const [trivia, setTrivia] = useState();
  const [userScore, setUserScore] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState();
  const [currentQuestion, setTriviaQuestion] = useState({ answers: [] });

  useEffect(() => {
    const triviaSource = api();
    setTrivia(triviaSource);
    setTriviaQuestion(triviaSource.next().value);
  }, []);

  const handleSelectQuestion = answer => {
    if (answer.number === currentQuestion.correctAnswer) {
      setUserScore(userScore + 1);
    }

    setSelectedQuestion(answer.number);
    setTimeout(handleNextQuestion, 1000);
  };

  const handleNextQuestion = () => {
    const nextQuestion = trivia.next();

    if (nextQuestion.done) {
      const score = userScore / 5;

      return history.push('/trivia-result', {
        isWinner: score > 0.5,
      });
    }

    setSelectedQuestion();
    return setTriviaQuestion(nextQuestion.value);
  };

  return (
    <Page id="trivia-screen">
      <Typography className={Styles.Title} variant="h4">
        {currentQuestion.text}
      </Typography>

      {selectedQuestion && (
        <AnswerResultTitle
          isCorrect={selectedQuestion === currentQuestion.correctAnswer}
        />
      )}

      {!selectedQuestion && (
        <AnswerOptionList
          options={currentQuestion.answers}
          onOptionPress={handleSelectQuestion}
        />
      )}
    </Page>
  );
}
