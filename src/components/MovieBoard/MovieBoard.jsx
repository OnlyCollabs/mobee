import React, { useEffect, useState, useRef } from "react";
import { fetchData } from "../../Utilities/fetchMovie";
import { Letter } from "./Letter";

const MovieBoard = () => {
  const [movie, setMovie] = useState("");
  const maxMovieNo = 19;

  const useKeyPress = (cb) => {
    const callbackRef = useRef(cb);

    useEffect(() => {
      callbackRef.current = cb;
    });

    useEffect(() => {
      const selectMovie = Math.floor(Math.random() * maxMovieNo) + 1;
      fetchData().then((data) => setMovie(data.results[selectMovie].title));

      const handle = (ev) => {
        if (ev.code) {
          callbackRef.current(ev);
        }
      };
      document.addEventListener("keypress", handle);
      return () => document.removeEventListener("keypress", handle);
    }, []);
  };

  const words = movie.split(" ");

  const letters = words.map((e) => {
    return e.toUpperCase().split("");
  });

  const handleKey = (e) => {
    if (e.code.slice(0, 3) === "Key") {
      console.log(e.keyCode);
    } else if (e.code.slice(0, 5) === "Digit") {
      console.log(e.keyCode);
    } else {
      console.log(e.keyCode);
    }
  };

  useKeyPress(handleKey);

  return (
    <div>
      <div className=" flex flex-wrap justify-center items-center">
        {letters.map((letter, key) => (
          <Letter letter={letter} key={key} />
        ))}
        {console.log(movie)}
      </div>
    </div>
  );
};

export default MovieBoard;
