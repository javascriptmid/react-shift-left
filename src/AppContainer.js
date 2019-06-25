import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { HomeScreen, TriviaScreen } from './components';

function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={HomeScreen} />
      <Route path="/trivia" exact component={TriviaScreen} />
    </Router>
  );
}

export default AppRouter;
