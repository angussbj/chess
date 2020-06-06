import React, { FC } from "react";
import styled from "styled-components";
import {
  Coordinates,
  Piece as PieceType,
} from "../../../../../../domain/types";
import { Piece } from "./components";

interface Props {
  coordinates: Coordinates;
  pieces: PieceType[];
  size: number;
}

const Square: FC<Props> = ({ coordinates, pieces, size }) => {
  const background = isBlack(coordinates) ? "indigo" : "powderblue";
  console.log("size", size);

  return (
    <SquareDiv style={{ maxWidth: size, maxHeight: size, background }}>
      {pieces.map((piece) => (
        <Piece type={piece.type} color={piece.color} size={size} />
      ))}
    </SquareDiv>
  );
};

const isBlack = ({ x, y }: Coordinates): boolean => (x - y) % 2 === 0;

const SquareDiv = styled.div`
  flex: 1;
`;

export { Square };
