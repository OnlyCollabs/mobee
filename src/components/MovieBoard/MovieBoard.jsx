import React, { useEffect, useState, useRef } from "react";
import { fetchData } from "../../Utilities/fetchMovie";
import { Word } from "./Word";

const MovieBoard = () => {
  const [movie, setMovie] = useState("");
  const [keyPressed, setKeyPressed] = useState("");
  const maxMovieNo = 19;

  const useKeyPress = (cb) => {
    const callbackRef = useRef(cb);

    useEffect(() => {
      callbackRef.current = cb;
    });

    useEffect(() => {
      const handle = (ev) => {
        if (ev.code) {
          callbackRef.current(ev);
        }
      };
      document.addEventListener("keypress", handle);
      return () => document.removeEventListener("keypress", handle);
    }, []);
  };

  useEffect(() => {
    const selectMovie = Math.floor(Math.random() * maxMovieNo) + 1;
    fetchData().then((data) => setMovie(data.results[selectMovie].title));
  }, []);

  const words = movie.split(" ");

  const lettersArray = words.map((e) => {
    return e.toUpperCase().split("");
  });

  const handleKey = (e) => {
    if (e.code.slice(0, 3) === "Key") {
      setKeyPressed(e.code.slice(3));
    } else if (e.code.slice(0, 5) === "Digit") {
      setKeyPressed(e.code.slice(5));
    } else {
      console.log(e.code);
    }
  };

  useKeyPress(handleKey);

  return (
    <div>
      <div className=" flex flex-wrap justify-center items-center">
        {lettersArray.map((letter, key) => (
          <Word letter={letter} key={key} keyPressed={keyPressed} />
        ))}
      </div>
      {console.log(movie)}
    </div>
  );
};

export default MovieBoard;
