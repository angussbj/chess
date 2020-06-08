import { State, Piece } from "domain/types";
import update from "immutability-helper";

export const onClickPiece = (
  gameState: State,
  setGameState: (state: State) => void,
  piece: Piece
) => () => {
  const activeColor = gameState.pieces.filter((p) => p.active)[0]?.color;
  if (!activeColor || piece.color === activeColor) {
    const pieceIndex = gameState.pieces.findIndex((p) => p.id === piece.id);
    const newGameState = update(gameState, {
      pieces: { [pieceIndex]: { active: { $apply: (x: boolean) => !x } } },
    });
    setGameState(newGameState);
  }
};
