import React, { FC } from "react";
import pawn from "./sprites/Chess_plt45.svg";
import { Pawn, Rook, Knight, Bishop, King, Queen } from "./sprites";

interface Props {
  type: string;
  color: string;
  size: number;
}

const Piece: FC<Props> = ({ type, color, size }) => {
  switch (type) {
    case "Pawn":
      return <Pawn size={size} color={color} />;
    case "Rook":
      return <Rook size={size} color={color} />;
    case "Knight":
      return <Knight size={size} color={color} />;
    case "Bishop":
      return <Bishop size={size} color={color} />;
    case "King":
      return <King size={size} color={color} />;
    case "Queen":
      return <Queen size={size} color={color} />;
    default:
      return null;
  }
};

export { Piece };
