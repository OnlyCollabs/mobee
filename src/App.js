import React from "react";
import MovieBoard from "./components/MovieBoard/MovieBoard";
import { GameContextProvider } from "./Context/GameContextProvider";
//import { ReactQueryDevtools } from "react-query-devtools";

const App = () => {
  return (
    <GameContextProvider>
      <div className="h-screen flex items-center justify-center">
        <MovieBoard />
      </div>
      {/*<ReactQueryDevtools initialIsOpen/>*/}
    </GameContextProvider>
  );
};

export default App;
