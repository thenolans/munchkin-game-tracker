import React, { useContext, useLayoutEffect, useState } from "react";
import { Link, RouteComponentProps } from "react-router-dom";

import "./Game.css";
import Avatar from "components/Avatar";
import Button from "components/Button";
import PlayerCard from "components/PlayerCard/PlayerCard";
import ScoreInput from "components/ScoreInput/ScoreInput";
import Status from "components/Status";
import { GameContext } from "contexts/gameContext";
import Swords from "images/swords.svg";
import getHighestLevel from "utils/getHighestLevel";
import getLowestUniqueLevel from "utils/getLowestUniqueLevel";
import { createNewPlayer } from "utils/player";
import Urls from "constants/urls";

const Game: React.FunctionComponent<RouteComponentProps> = ({ history }) => {
  const game = useContext(GameContext);
  const [players, setPlayers] = game.usePlayers;
  const [lowestPlayerLevel, setLowestPlayerLevel] = useState<number | null>(); //number
  const [highestPlayerLevel, setHightestPlayerLevel] = useState<number>(); //number

  useLayoutEffect(() => {
    const levels: number[] = players.map((player) => player.level);
    setLowestPlayerLevel(getLowestUniqueLevel(levels));
    setHightestPlayerLevel(getHighestLevel(levels));
  }, [players]);

  const updatePlayer = (
    playerId: string,
    field: string,
    value: string | number
  ) => {
    setPlayers(
      players.map((player) => {
        if (player.id === playerId) {
          return {
            ...player,
            [field]: value,
          };
        }
        return player;
      })
    );
  };

  const resetGame = () => {
    setPlayers(
      Array(2)
        .fill(null)
        .map(() => createNewPlayer())
    );
    history.push(Urls.routes.homePage);
  };

  const rematchGame = () => {
    setPlayers(
      players.map((player) => {
        return {
          ...player,
          level: 1,
          bonus: 0,
          sex: player.originalSex,
        };
      })
    );
  };

  return (
    <div className="game">
      <div data-testid="game-player__options">
        {players.map((player) => (
          <PlayerCard key={player.id}>
            <div className="game-player" data-testid={`player-${player.id}`}>
              <div className="game-player__section">
                <div className="game-player__info">
                  <Avatar id={player.avatar} />
                  <div className="game-player__name">{player.name}</div>
                </div>
                <div className="game-player__badges">
                  {lowestPlayerLevel === player.level && (
                    <Status theme="warning" data-testid="discard-status">
                      Discards
                    </Status>
                  )}
                  {highestPlayerLevel === player.level && (
                    <Status theme="success" data-testid="first-place-status">
                      First
                    </Status>
                  )}
                  <Button
                    className="game-player__sex"
                    data-testid="toggle-sex"
                    aria-label={`Change ${player.name}'s sex`}
                    onClick={() =>
                      updatePlayer(
                        player.id,
                        "sex",
                        player.sex === "M" ? "F" : "M"
                      )
                    }
                    theme="info"
                  >
                    {player.sex}
                  </Button>
                </div>
              </div>

              <div className="actions">
                <div
                  className="actions__section"
                  data-testid={`player-${player.id}__level-update`}
                >
                  <div className="actions__score">Level</div>
                  <ScoreInput
                    min={1}
                    max={99}
                    currentScore={player.level}
                    onChange={(newLevel: number) =>
                      updatePlayer(player.id, "level", newLevel)
                    }
                  />
                </div>
                <div className="actions__combat">
                  <Link to={`/combat?score=${player.level + player.bonus}`}>
                    <img
                      className="actions__combat-img"
                      src={Swords}
                      alt={`Enter combat with ${player.name}`}
                    />
                  </Link>
                  <div
                    data-testid="combat-score"
                    className="actions__combat-score"
                  >
                    {player.level + player.bonus}
                  </div>
                </div>
                <div
                  className="actions__section"
                  data-testid={`player-${player.id}__bonus-update`}
                >
                  <div className="actions__score">Bonus</div>
                  <ScoreInput
                    currentScore={player.bonus}
                    onChange={(newBonus: number) =>
                      updatePlayer(player.id, "bonus", newBonus)
                    }
                  />
                </div>
              </div>
            </div>
          </PlayerCard>
        ))}
      </div>
      <div className="game__actions">
        <Button as={Link} to={Urls.routes.configure}>
          &lt;
        </Button>
        <Button data-testid="game__actions-rematch" onClick={rematchGame}>
          Rematch
        </Button>
        <Button data-testid="game__actions-reset" onClick={resetGame}>
          End Game
        </Button>
      </div>
    </div>
  );
};

export default Game;
