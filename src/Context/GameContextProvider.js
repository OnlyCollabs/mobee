import { GameCtx } from "./GameContext";
export const GameContextProvider = (props) => {
  return (
    <GameCtx.Provider value={GameContext}>{props.children}</GameCtx.Provider>
  );
};
