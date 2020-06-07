import React, { FC, useContext } from "react";
import { PieceImage } from "./components";
import { GameContext } from "../../../..";
import { Piece as PieceType } from "../../../../../../../../domain/types";
import update from "immutability-helper";

interface Props {
  piece: PieceType;
  size: number;
}

const Piece: FC<Props> = ({ piece, size }) => {
  const { gameState, setGameState } = useContext(GameContext);

  const onClick = (): void => {
    const newGameState = update(gameState, {
      pieces: { [0]: { active: { $set: true } } },
    });
    setGameState(newGameState);
  };

  return (
    <div onClick={onClick}>
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
