import 'babel-polyfill';

import driver from '../driver';
import config from '../config';

import waitForElement from '../waitForElement';

// eslint-disable-next-line no-undef
jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;

describe('HomeScreen', () => {
  beforeAll(async () => {
    await driver.init({ browserName: config.E2E_DEVICE });
  });

  afterAll(async () => {
    await driver.quit();
  });

  it('load the app', async () => {
    await driver.get('http://localhost:3000/');
    const homeScreen = await waitForElement('home-screen');
    expect(homeScreen).toBeDefined();
  });

  it('start the trivia', async () => {
    const startPlayingButton = await waitForElement('start-playing-button');
    expect(startPlayingButton).toBeDefined();

    await driver.moveTo(startPlayingButton);
    await driver.click();

    const triviaScreen = await waitForElement('trivia-screen');
    expect(triviaScreen).toBeDefined();
  });

  it('answer the 5 questions', async () => {
    for (let i = 0; i < 5; i++) {
      const answerOptionButton = await waitForElement('answer-option');
      expect(answerOptionButton).toBeDefined();

      await driver.moveTo(answerOptionButton);
      await driver.click();
      await driver.sleep(1000);
    }

    const triviaResultScreen = await waitForElement('trivia-result-screen');
    expect(triviaResultScreen).toBeDefined();
  });

  it('restarts trivia', async () => {
    const restartTriviaButton = await waitForElement('restart-trivia-button');
    expect(restartTriviaButton).toBeDefined();

    await driver.moveTo(restartTriviaButton);
    await driver.click();

    const homeScreen = await waitForElement('home-screen');
    expect(homeScreen).toBeDefined();
  });
});
