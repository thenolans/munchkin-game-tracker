import React, { useState, useEffect } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import "./app.css";
import Card from "../Card";
import Combat from "../Combat";
import ConfigureGame from "../ConfigureGame";
import CreatePlayer from "../CreatePlayer";
import EditPlayer from "../EditPlayer";
import Game from "../Game";
import GithubLink from "../GithubLink/GithubLink";
import { GameContext } from "../../contexts/gameContext";
import Header from "../Header";
import NotFoundPage from "../NotFoundPage";
import SplashScreen from "../SplashScreen";
import { Player } from "../../utils/player";

const App = () => {
  const [players, setPlayers] = useState(
    //version local storage key to prevent stale data with app changes
    JSON.parse(localStorage.getItem("game") || "") || //change to game_v1.0.0
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
