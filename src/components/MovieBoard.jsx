import React, { useEffect, useState } from "react";
import { fetchData } from "../Utilities/fetchMovie";

const MovieBoard = () => {
  const [movie, setMovie] = useState("");
  const maxMovieNo = 19;

  const containsSpecialChar = (char) => {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(char);
  };

  useEffect(() => {
    const selectMovie = Math.floor(Math.random() * maxMovieNo) + 1;
    fetchData().then((data) => setMovie(data.results[selectMovie].title));
  }, []);

  const words = movie.split(" ");

  const letters = words.map((e) => {
    return e.toUpperCase().split("");
  });

  return (
    <div>
      <div className=" flex flex-wrap justify-center items-center">
        {letters.map((letter, key) => (
          <div className="mr-6" key={key}>
            <div className="flex ">
              {letter.map((l, index) => (
                <div
                  key={index}
                  style={{ minWidth: "4rem", minHeight: "4rem" }}
                  className={`${
                    containsSpecialChar(l)
                      ? "p-2"
                      : "p-4 border-2 border-solid border-black"
                  } mx-1 text-2xl font-bold box-border text-center`}
                >
                  {l === "A" || l === "E" || l === "I" || l === "O" || l === "U"
                    ? `${l}`
                    : ""}
                  {console.log(movie)}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieBoard;
