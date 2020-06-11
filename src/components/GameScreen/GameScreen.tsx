import React, { FC } from "react";
import { Board } from "./components";
import styled from "styled-components";
import { useWindowSize } from "@react-hook/window-size";

const GameScreen: FC = () => {
  const padding = 12;
  const windowSize = useWindowSize();

  const pieceCreditLink = (
    <a href="https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces">
      here
    </a>
  );
  const creatorCreditLink = (
    <a href="https://en.wikipedia.org/wiki/User:Cburnett">User:Cburnett</a>
  );

  return (
    <ScreenContainer style={{ padding }}>
      <Board
        maxHeight={windowSize[0] - 2 * padding}
        maxWidth={windowSize[1] - 2 * padding}
      />

      <div style={{ color: "white", fontSize: 12 }}>
        Chess pieces originally by {creatorCreditLink} under creative commons
        license, found {pieceCreditLink}.
      </div>
    </ScreenContainer>
  );
};

const ScreenContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
  background: #232323;
  box-sizing: border-box;
`;

export { GameScreen };
