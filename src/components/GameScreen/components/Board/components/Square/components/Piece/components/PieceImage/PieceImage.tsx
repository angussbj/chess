import React, { FC } from "react";
import { Pawn, Rook, Knight, Bishop, King, Queen } from "./sprites";

interface Props {
  type: string;
  color: string;
  active: boolean;
  size: number;
}

const PieceImage: FC<Props> = ({ type, color, size, active }) => {
  switch (type) {
    case "Pawn":
      return <Pawn size={size} color={color} active={active} />;
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

export { PieceImage };
