import React, { FC } from "react";
import styled from "styled-components";
import { Square } from "./components";
import { GameStateProvider } from "domain/gameState";
import { useWindowSize } from "@react-hook/window-size";

const boardDetails = {
  width: 8,
  height: 8,
};

const Board: FC = () => {
  const padding = 12;
  const windowSize = useWindowSize();
  const squareSize = Math.min(
    (windowSize[0] - 2 * padding) / boardDetails.width,
    (windowSize[1] - 2 * padding) / boardDetails.height,
    100
  );

  return (
    <GameStateProvider>
      <BoardContainer style={{ padding }}>
        {coordinateRow.map((x) => (
          <ColumnContainer style={{ maxWidth: squareSize }} key={x}>
            {coordinateCol.map((y) => (
              <Square
                size={squareSize}
                location={{ x, y }}
                key={JSON.stringify([x, y])}
              />
            ))}
          </ColumnContainer>
        ))}
      </BoardContainer>
    </GameStateProvider>
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

export { Board };
