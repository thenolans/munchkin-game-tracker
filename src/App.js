import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SplashScreen from "./components/SplashScreen";
import GameEdit from "./components/ConfigureGame";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={SplashScreen} />
          <Route path="/configure" component={GameEdit} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
