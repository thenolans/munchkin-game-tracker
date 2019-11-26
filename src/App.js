import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SplashScreen from "./components/SplashScreen";
import ConfigureGame from "./components/ConfigureGame";
import Game from "./components/Game";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={SplashScreen} />
          <Route path="/configure" component={ConfigureGame} />
          <Route path="/game" component={Game} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
