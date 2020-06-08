import React, { FC, createContext, useContext, useState } from "react";
import { State } from "domain";

// TODO: Extract to higher level mo

interface StateTools {
  state: State;
  setState: (state: State) => void;
}

const GameContext = createContext<StateTools>({
  state: new State(),
  setState: () => {},
});

const GameStateProvider: FC = ({ children }) => {
  const [state, setState] = useState(new State());

  return (
    <GameContext.Provider value={{ state, setState }}>
      {children}
    </GameContext.Provider>
  );
};

const useGameState = (loading: boolean): StateTools => {
  const { state, setState } = useContext(GameContext);

  return { state, setState };
};

export { GameStateProvider, useGameState };
