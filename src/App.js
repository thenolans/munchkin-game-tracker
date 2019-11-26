import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SplashScreen from "./components/SplashScreen";
import EditGame from "./components/EditGame";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <SplashScreen />
          </Route>
          <Route path="/edit">
            <EditGame />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
