import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Class from "./classes/pages/Class";
import Addmat from "./material/pages/Addmat";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Class />
          </Route>
          <Route path="/addmat" exact>
            <Addmat />
          </Route>
          <Route path="/result" exact></Route>

          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
