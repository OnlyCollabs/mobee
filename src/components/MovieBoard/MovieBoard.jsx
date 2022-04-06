import React, { useEffect, useState, useRef } from "react";
import { useContext } from "react";
import { GameCtx } from "../../Context/GameContext";
import { Word } from "./Word";

const MovieBoard = () => {
  const ctx = useContext(GameCtx);

  const [keyPressed, setKeyPressed] = useState("");

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


  const words = ctx.movie.split(" ");
  const lettersArray = words.map((e) => {
    return e.toUpperCase().split("");
  });

  console.log(lettersArray);

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
    </div>
  );
};

export default MovieBoard;
