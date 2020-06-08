import React, { FC, useContext } from "react";
import styled from "styled-components";
import { Coordinates } from "domain/types";
import { Piece, GridArrangement } from "./components";
import {
  GameContext,
  squareColor,
  onClickSquare,
  livePiecesAt,
} from "domain/gameState";

interface Props {
  location: Coordinates;
  size: number;
}

const Square: FC<Props> = ({ location, size }) => {
  const background = squareColor(location);

  const { gameState, setGameState } = useContext(GameContext);

  const piecesOnSquare = livePiecesAt(location, gameState);
  const dimension = Math.ceil(Math.sqrt(piecesOnSquare.length));
  const pieceSize = size / dimension;

  return (
    <SquareDiv
      style={{ maxWidth: size, maxHeight: size, background }}
      onClick={onClickSquare(gameState, setGameState, location)}
    >
      <GridArrangement>
        {piecesOnSquare.map((piece) => (
          <Piece piece={piece} size={pieceSize} key={piece.id} />
        ))}
      </GridArrangement>
    </SquareDiv>
  );
};

const SquareDiv = styled.div`
  flex: 1;
`;

export { Square };
