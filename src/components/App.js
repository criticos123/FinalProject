import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignIn from "./SignIn";
import Homepage from "./homepage";
import TournamentPage from "./TournamentPage"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route exact path="/home">
          <Homepage />
        </Route>
        <Route exact path="/tournament">
          <TournamentPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
