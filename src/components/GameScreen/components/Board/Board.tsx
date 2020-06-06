import React, { FC, useState } from "react";
import styled from "styled-components";
import { Square } from "./components";
import { Piece, Color, PieceType, Coordinates } from "../../../../domain/types";
import { State } from "../../../../domain";
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

  const [state, setState] = useState(new State());

  return (
    <BoardContainer style={{ padding }}>
      {coordinateRow.map((x) => (
        <ColumnContainer style={{ maxWidth: squareSize }}>
          {coordinateCol.map((y) => (
            <Square
              size={squareSize}
              coordinates={{ x, y }}
              pieces={state.pieces.filter(on({ x, y }))}
            />
          ))}
        </ColumnContainer>
      ))}
    </BoardContainer>
  );
};

const coordinateRow = Array.from(Array(boardDetails.width).keys());
const coordinateCol = Array.from(Array(boardDetails.height).keys());

const on = ({ x, y }: Coordinates) => (piece: Piece) =>
  piece.location.x === x && piece.location.y === y;

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
