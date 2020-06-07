import React, { FC, useContext } from "react";
import styled from "styled-components";
import {
  Coordinates,
  Piece as PieceType,
} from "../../../../../../domain/types";
import { Piece } from "./components";
// import { Piece as PieceClass } from "../../../../../../domain";
import { GameContext } from "../../";

interface Props {
  location: Coordinates;
  size: number;
}

const Square: FC<Props> = ({ location, size }) => {
  const background = isBlack(location) ? "indigo" : "powderblue";

  const { gameState } = useContext(GameContext);

  return (
    <SquareDiv style={{ maxWidth: size, maxHeight: size, background }}>
      {livePiecesAt(location, gameState.pieces).map((piece) => (
        <Piece piece={piece} size={size} />
      ))}
    </SquareDiv>
  );
};

const isBlack = ({ x, y }: Coordinates): boolean => (x - y) % 2 === 0;
const livePiecesAt = (location: Coordinates, pieces: PieceType[]) => {
  return pieces
    .filter((p) => p.location.x === location.x && p.location.y === location.y)
    .filter((p) => p.alive);
};

const SquareDiv = styled.div`
  flex: 1;
`;

export { Square };
