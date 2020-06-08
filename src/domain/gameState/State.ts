import { State, setState, Coordinates, Piece } from "domain/types";
import update from "immutability-helper";
import * as Pieces from "./Pieces";

export const livePiecesAt = (location: Coordinates, state: State) => {
  return state.pieces
    .filter((p) => p.location.x === location.x && p.location.y === location.y)
    .filter((p) => p.alive);
};

export const toggleActiveByPieceId = (
  gameState: State,
  setGameState: setState,
  id: number
): void => {
  const pieceIndex = gameState.pieces.findIndex((p) => p.id === id);
  const newGameState = update(gameState, {
    pieces: { [pieceIndex]: { active: { $apply: (x: boolean) => !x } } },
  });
  setGameState(newGameState);
};

export const killPiecesAt = (
  gameState: State,
  setGameState: setState,
  location: Coordinates
): void => {
  const newGameState = update(gameState, {
    pieces: {
      $apply: (pieces: Piece[]) => Pieces.killPiecesOnSquare(pieces, location),
    },
  });
  setGameState(newGameState);
};

export const moveActivePiecesTo = (
  gameState: State,
  setGameState: setState,
  location: Coordinates
): void => {
  const newGameState = update(gameState, {
    pieces: {
      $apply: (pieces: Piece[]) => Pieces.moveActivePieces(pieces, location),
    },
  });
  setGameState(newGameState);
};
