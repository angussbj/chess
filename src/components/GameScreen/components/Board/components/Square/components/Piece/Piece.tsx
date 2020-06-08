import React, { FC, useContext } from "react";
import { PieceImage } from "./components";
import { GameContext, onClickPiece } from "domain/gameState";
import { Piece as PieceType } from "domain/types";

interface Props {
  piece: PieceType;
  size: number;
}

const Piece: FC<Props> = ({ piece, size }) => {
  const { gameState, setGameState } = useContext(GameContext);

  return (
    <div
      style={{ height: size, width: size }}
      onClick={onClickPiece(gameState, setGameState, piece)}
    >
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
