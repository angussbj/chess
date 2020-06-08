import React, { FC, useContext } from "react";
import { PieceImage } from "./components";
import { GameContext } from "../../../..";
import { Piece as PieceType } from "domain/types";
import update from "immutability-helper";

interface Props {
  piece: PieceType;
  size: number;
}

const Piece: FC<Props> = ({ piece, size }) => {
  const { gameState, setGameState } = useContext(GameContext);

  const onClick = (): void => {
    const activeColor = gameState.pieces.filter((p) => p.active)[0]?.color;
    if (!activeColor || piece.color === activeColor) {
      const pieceIndex = gameState.pieces.findIndex((p) => p.id === piece.id);
      const newGameState = update(gameState, {
        pieces: { [pieceIndex]: { active: { $apply: (x: boolean) => !x } } },
      });
      setGameState(newGameState);
    }
  };

  return (
    <div style={{ height: size, width: size }} onClick={onClick}>
      <PieceImage
        type={piece.type}
        color={piece.color}
        active={piece.active}
        size={size}
      />
    </div>
  );
};

export { Piece };
