import { State, setState, Coordinates } from "domain/types";
import { livePiecesAt, killPiecesAt, moveActivePiecesTo } from "./State";

export const onClickSquare = (
  gameState: State,
  setGameState: setState,
  location: Coordinates
) => () => {
  const activeColor = gameState.pieces.filter((p) => p.active)[0]?.color;
  const colorOnSquare = livePiecesAt(location, gameState)[0]?.color;

  if (activeColor && (!colorOnSquare || colorOnSquare !== activeColor)) {
    killPiecesAt(gameState, setGameState, location);
    moveActivePiecesTo(gameState, setGameState, location);
  }
};
