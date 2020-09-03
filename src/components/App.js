import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignIn from "./SignIn";
import Homepage from "./homepage";
import TournamentPage from "./TournamentPage";
import Profile from "./Profile";

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
        <Route exact path="/tournament/:id">
          <TournamentPage />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
