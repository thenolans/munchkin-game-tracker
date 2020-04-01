import React, { useState, useEffect } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Card from "./components/Card";
import Combat from "./components/Combat";
import ConfigureGame from "./components/ConfigureGame";
import Game from "./components/Game";
import { GameContext } from "./contexts/gameContext";
import Header from "./components/Header";
import SplashScreen from "./components/SplashScreen";
import { Player } from "./utils/player";
import EditPlayer from "./components/EditPlayer";
import CreatePlayer from "./components/CreatePlayer";

const App = () => {
  const [players, setPlayers] = useState(
    JSON.parse(localStorage.getItem("game")) ||
      Array(2)
        .fill(null)
        .map(() => new Player())
  );

  useEffect(() => {
    localStorage.setItem("game", JSON.stringify(players));
  }, [JSON.stringify(players)]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="game-content">
      <Header />
      <GameContext.Provider
        value={{
          usePlayers: [players, setPlayers]
        }}
      >
        <Router>
          <Card>
            <Switch>
              <Route exact path="/" component={SplashScreen} />
              <Route path="/configure" component={ConfigureGame} />
              <Route path="/game" component={Game} />
              <Route path="/combat" component={Combat} />
              <Route path="/player/edit/:id" component={EditPlayer} />
              <Route path="/player/create" component={CreatePlayer} />
            </Switch>
          </Card>
        </Router>
      </GameContext.Provider>
    </div>
  );
};

export default App;
