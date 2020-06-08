import { State, Coordinates, Piece } from "domain/types";
import { livePiecesAt } from "./state";
import update from "immutability-helper";

export const onClickSquare = (
  gameState: State,
  setGameState: (state: State) => void,
  location: Coordinates
) => () => {
  const activeColor = gameState.pieces.filter((p) => p.active)[0]?.color;
  const colorOnSquare = livePiecesAt(location, gameState)[0]?.color;

  if (activeColor && (!colorOnSquare || colorOnSquare !== activeColor)) {
    const moveActivePieces = (pieces: Piece[]): Piece[] =>
      pieces.map((p) => {
        if (p.active) {
          return update(p, {
            location: { $set: location },
            active: { $set: false },
          });
        }
        return p;
      });
    const killPiecesOnSquare = (pieces: Piece[]): Piece[] =>
      pieces.map((p) => {
        if (p.location.x === location.x && p.location.y === location.y) {
          return update(p, {
            alive: { $set: false },
          });
        }
        return p;
      });
    const newGameState = update(gameState, {
      pieces: {
        $apply: (pieces: Piece[]) =>
          moveActivePieces(killPiecesOnSquare(pieces)),
      },
    });
    setGameState(newGameState);
  }
};
