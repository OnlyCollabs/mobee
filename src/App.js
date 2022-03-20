import React, { useEffect, useState } from "react";

const App = () => {
  const [movie, setMovie] = useState("");
  const maxPage = 500;
  const maxMovieNo = 19;

  const fetchData = async () => {
    const pageNo = Math.floor(Math.random() * maxPage) + 1;
    const englishUrl = `https://api.themoviedb.org/3/discover/movie?api_key=f556ec5937fcffab8354d8415d6db8f8&language=en-US&sort_by=popularity.desc&page=${pageNo}`;
    const response = await fetch(englishUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  };

  useEffect(() => {
    const selectMovie = Math.floor(Math.random() * maxMovieNo) + 1;
    fetchData().then((data) => setMovie(data.results[selectMovie]));
  }, []);

  console.log(movie);

  return <div>{movie.title}</div>;
};

export default App;
