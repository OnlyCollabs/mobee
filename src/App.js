import React, { useEffect, useState } from "react";
import { fetchData } from "./Utilities/fetchMovie";

const App = () => {
  const [movie, setMovie] = useState("");
  const [movieArr, setMovieArr] = useState([]);
  const maxMovieNo = 19;

  const splitMovie = (movie) => {
    let movieUpperCase = movie.toUpperCase();
    let temp = movieUpperCase.split("");
    setMovieArr(temp);
  };

  const containsSpecialChar = (char) => {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(char);
  };

  useEffect(() => {
    const selectMovie = Math.floor(Math.random() * maxMovieNo) + 1;
    fetchData().then((data) => setMovie(data.results[selectMovie].title));
  }, []);

  useEffect(() => {
    splitMovie(movie);
  }, [movie]);

  return (
    <div className="flex flex-wrap m-3">
      {movieArr.map((item, index) => {
        return item === " " ? (
          <span className="mx-4" key={index}></span>
        ) : (
          <span
            className={`${
              containsSpecialChar(item)
                ? "p-2"
                : "p-3 px-4 border-2 border-solid border-black"
            }  mx-1 text-2xl font-bold`}
            key={index}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
};

export default App;
