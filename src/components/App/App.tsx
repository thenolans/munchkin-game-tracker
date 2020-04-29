import React, { useState, useEffect } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import "./app.css";
import Card from "components/Card";
import Combat from "components/Combat";
import ConfigureGame from "components/ConfigureGame";
import CreatePlayer from "components/CreatePlayer";
import EditPlayer from "components/EditPlayer";
import Game from "components/Game";
import GithubLink from "components/GithubLink";
import Header from "components/Header";
import NotFoundPage from "components/NotFoundPage";
import SplashScreen from "components/SplashScreen";
import { GameContext } from "contexts/gameContext";
import { createNewPlayer } from "utils/player";

//version local storage key to prevent stale data with app changes
const LOCAL_STORAGE_KEY = "game_v1.0.0";

const App = () => {
  const localGame = localStorage.getItem(LOCAL_STORAGE_KEY);
  const [players, setPlayers] = useState(
    localGame
      ? JSON.parse(localGame)
      : Array(2)
          .fill(null)
          .map(() => createNewPlayer())
  );

  useEffect(() => {
    localStorage.setItem("game_v1.0.0", JSON.stringify(players));
  }, [JSON.stringify(players)]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="game-content">
      <Header />
      <GithubLink />
      <GameContext.Provider
        value={{
          usePlayers: [players, setPlayers],
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
              <Route path="*" component={NotFoundPage} />
            </Switch>
          </Card>
        </Router>
      </GameContext.Provider>
    </div>
  );
};

export default App;
