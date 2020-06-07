import React, { FC, useState, createContext } from "react";
import styled from "styled-components";
import { Square } from "./components";
import { PieceType, Color, Piece } from "../../../../domain/types";
import { useWindowSize } from "@react-hook/window-size";

const boardDetails = {
  width: 8,
  height: 8,
};

type State = { pieces: Piece[] };

const defaultState = {
  pieces: [
    {
      type: PieceType.Pawn,
      color: Color.White,
      location: { x: 0, y: 1 },
      active: false,
      alive: true,
    },
    {
      type: PieceType.Pawn,
      color: Color.White,
      location: { x: 1, y: 1 },
      active: false,
      alive: true,
    },
    {
      type: PieceType.Pawn,
      color: Color.White,
      location: { x: 2, y: 1 },
      active: false,
      alive: true,
    },
    {
      type: PieceType.Pawn,
      color: Color.White,
      location: { x: 3, y: 1 },
      active: false,
      alive: true,
    },
    {
      type: PieceType.Pawn,
      color: Color.White,
      location: { x: 4, y: 1 },
      active: false,
      alive: true,
    },
    {
      type: PieceType.Pawn,
      color: Color.White,
      location: { x: 5, y: 1 },
      active: false,
      alive: true,
    },
    {
      type: PieceType.Pawn,
      color: Color.White,
      location: { x: 6, y: 1 },
      active: false,
      alive: true,
    },
    {
      type: PieceType.Pawn,
      color: Color.White,
      location: { x: 7, y: 1 },
      active: false,
      alive: true,
    },
    {
      type: PieceType.Rook,
      color: Color.White,
      location: { x: 0, y: 0 },
      active: false,
      alive: true,
    },
    {
      type: PieceType.Rook,
      color: Color.White,
      location: { x: 7, y: 0 },
      active: false,
      alive: true,
    },
    {
      type: PieceType.Knight,
      color: Color.White,
      location: { x: 1, y: 0 },
      active: false,
      alive: true,
    },
    {
      type: PieceType.Knight,
      color: Color.White,
      location: { x: 6, y: 0 },
      active: false,
      alive: true,
    },
    {
      type: PieceType.Bishop,
      color: Color.White,
      location: { x: 2, y: 0 },
      active: false,
      alive: true,
    },
    {
      type: PieceType.Bishop,
      color: Color.White,
      location: { x: 5, y: 0 },
      active: false,
      alive: true,
    },
    {
      type: PieceType.King,
      color: Color.White,
      location: { x: 4, y: 0 },
      active: false,
      alive: true,
    },
    {
      type: PieceType.Queen,
      color: Color.White,
      location: { x: 3, y: 0 },
      active: false,
      alive: true,
    },
    {
      type: PieceType.Pawn,
      color: Color.Black,
      location: { x: 0, y: 6 },
      active: false,
      alive: true,
    },
    {
      type: PieceType.Pawn,
      color: Color.Black,
      location: { x: 1, y: 6 },
      active: false,
      alive: true,
    },
    {
      type: PieceType.Pawn,
      color: Color.Black,
      location: { x: 2, y: 6 },
      active: false,
      alive: true,
    },
    {
      type: PieceType.Pawn,
      color: Color.Black,
      location: { x: 3, y: 6 },
      active: false,
      alive: true,
    },
    {
      type: PieceType.Pawn,
      color: Color.Black,
      location: { x: 4, y: 6 },
      active: false,
      alive: true,
    },
    {
      type: PieceType.Pawn,
      color: Color.Black,
      location: { x: 5, y: 6 },
      active: false,
      alive: true,
    },
    {
      type: PieceType.Pawn,
      color: Color.Black,
      location: { x: 6, y: 6 },
      active: false,
      alive: true,
    },
    {
      type: PieceType.Pawn,
      color: Color.Black,
      location: { x: 7, y: 6 },
      active: false,
      alive: true,
    },
    {
      type: PieceType.Rook,
      color: Color.Black,
      location: { x: 0, y: 7 },
      active: false,
      alive: true,
    },
    {
      type: PieceType.Rook,
      color: Color.Black,
      location: { x: 7, y: 7 },
      active: false,
      alive: true,
    },
    {
      type: PieceType.Knight,
      color: Color.Black,
      location: { x: 1, y: 7 },
      active: false,
      alive: true,
    },
    {
      type: PieceType.Knight,
      color: Color.Black,
      location: { x: 6, y: 7 },
      active: false,
      alive: true,
    },
    {
      type: PieceType.Bishop,
      color: Color.Black,
      location: { x: 2, y: 7 },
      active: false,
      alive: true,
    },
    {
      type: PieceType.Bishop,
      color: Color.Black,
      location: { x: 5, y: 7 },
      active: false,
      alive: true,
    },
    {
      type: PieceType.King,
      color: Color.Black,
      location: { x: 4, y: 7 },
      active: false,
      alive: true,
    },
    {
      type: PieceType.Queen,
      color: Color.Black,
      location: { x: 3, y: 7 },
      active: false,
      alive: true,
    },
  ],
};

const GameContext = createContext({
  gameState: defaultState,
  setGameState: (newGameState: State) => {},
});

const Board: FC = () => {
  const [gameState, setGameState] = useState(defaultState);
  const blah = (newGameState: State) => {
    console.log("setting new game state");
    setGameState(newGameState);
  };

  console.log("rendering board");

  const padding = 12;
  const windowSize = useWindowSize();
  const squareSize = Math.min(
    (windowSize[0] - 2 * padding) / boardDetails.width,
    (windowSize[1] - 2 * padding) / boardDetails.height,
    100
  );

  return (
    <GameContext.Provider value={{ gameState, setGameState: blah }}>
      <BoardContainer style={{ padding }}>
        {coordinateRow.map((x) => (
          <ColumnContainer style={{ maxWidth: squareSize }}>
            {coordinateCol.map((y) => (
              <Square size={squareSize} location={{ x, y }} />
            ))}
          </ColumnContainer>
        ))}
      </BoardContainer>
    </GameContext.Provider>
  );
};

const coordinateRow = Array.from(Array(boardDetails.width).keys());
const coordinateCol = Array.from(Array(boardDetails.height).keys());

const BoardContainer = styled.div`
  background: green;
  display: flex;
  height: 100%;
  box-sizing: border-box;
`;

const ColumnContainer = styled.div`
  flex-direction: column-reverse;
  justify-content: flex-end;
  flex: 1;
  display: flex;
`;

export { Board, GameContext };
