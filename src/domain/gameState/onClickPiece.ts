import { State, setState, Piece } from "domain/types";
import * as state from "./State";

export const onClickPiece = (
  gameState: State,
  setGameState: setState,
  piece: Piece
) => () => {
  const activeColor = gameState.pieces.filter((p) => p.active)[0]?.color;
  if (!activeColor || piece.color === activeColor) {
    state.toggleActiveByPieceId(gameState, setGameState, piece.id);
  }
};
