import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import Page from '../Page';
import { TitleLogo } from './components';
import Styles from './HomeScreen.module.css';

export default function HomeScreen() {
  return (
    <Page>
      <div className={Styles.wrapper}>
        <TitleLogo />

        <Link to="/trivia">
          <Button color="primary" variant="outlined">
            START PLAYING
          </Button>
        </Link>
      </div>
    </Page>
  );
}
