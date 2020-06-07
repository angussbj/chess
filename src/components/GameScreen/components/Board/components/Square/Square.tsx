import React, { FC, useContext } from "react";
import styled from "styled-components";
import {
  Coordinates,
  Piece as PieceType,
} from "../../../../../../domain/types";
import { Piece } from "./components";
import { GameContext } from "../../";
import update from "immutability-helper";

interface Props {
  location: Coordinates;
  size: number;
}

const Square: FC<Props> = ({ location, size }) => {
  const background = isBlack(location) ? "indigo" : "powderblue";

  const { gameState, setGameState } = useContext(GameContext);

  const onClick = (): void => {
    const activeColor = gameState.pieces.filter((p) => p.active)[0]?.color;
    const colorOnSquare = livePiecesAt(location, gameState.pieces)[0]?.color;
    if (activeColor && (!colorOnSquare || colorOnSquare !== activeColor)) {
      const moveActivePieces = (pieces: PieceType[]): PieceType[] =>
        pieces.map((p) => {
          if (p.active) {
            return update(p, {
              location: { $set: location },
              active: { $set: false },
            });
          }
          return p;
        });
      const killPiecesOnSquare = (pieces: PieceType[]): PieceType[] =>
        pieces.map((p) => {
          if (p.location.x === location.x && p.location.y === location.y) {
            return update(p, {
              alive: { $set: false },
            });
          }
          return p;
        });
      const newGameState = update(gameState, {
        pieces: {
          $apply: (pieces: PieceType[]) =>
            moveActivePieces(killPiecesOnSquare(pieces)),
        },
      });
      setGameState(newGameState);
    }
  };

  return (
    <SquareDiv
      style={{ maxWidth: size, maxHeight: size, background }}
      onClick={onClick}
    >
      {livePiecesAt(location, gameState.pieces).map((piece) => (
        <Piece piece={piece} size={size} key={piece.id} />
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
