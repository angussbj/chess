import React, { FC } from "react";
import { Board } from "./components";
import styled from "styled-components";

const GameScreen: FC = () => {
  return (
    <ScreenContainer>
      <Board />
    </ScreenContainer>
  );
};

const ScreenContainer = styled.div`
  height: 100vh;
  background: crimson;
`;

export { GameScreen };
