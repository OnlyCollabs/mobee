import { useEffect, useState } from "react";
import { GameCtx } from "./GameContext";
import { fetchData } from "../Utilities/fetchMovie";

export const GameContextProvider = (props) => {

  const initails = {
    movie: ""
  }

  const [gameState, setGameState] = useState(initails);
  const maxMovieNo = 19;

  useEffect(()=> {
    const selectMovie = Math.floor(Math.random() * maxMovieNo) + 1;
    fetchData().then((data) => setGameState({
      movie: data.results[selectMovie].title
    }));
  }, [])

  const gameContext ={
    movie: gameState.movie
  }

  return (
    <GameCtx.Provider value={gameContext}>{props.children}</GameCtx.Provider>
  );
};
 