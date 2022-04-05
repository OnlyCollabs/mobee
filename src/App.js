import React from "react";
import MovieBoard from "./components/MovieBoard/MovieBoard";
import { GameContextProvider } from "./Context/GameContextProvider";

const App = () => {
  return (
    <GameContextProvider>
      <div className="h-screen flex items-center justify-center">
        <MovieBoard />
      </div>
    </GameContextProvider>
  );
};

export default App;
