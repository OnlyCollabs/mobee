import React, { useEffect, useState } from "react";

const App = () => {
  const [movie, setMovie] = useState("");
  const [movieData, setMovieData] = useState("");
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

  const fetchMovieDetails = async () => {
    const movieUrl = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=f556ec5937fcffab8354d8415d6db8f8&language=en-US`;
    const details = await fetch(movieUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return details.json();
  };

  useEffect(() => {
    const selectMovie = Math.floor(Math.random() * maxMovieNo) + 1;
    // console.log(selectMovie);
    fetchData().then((data) => setMovie(data.results[selectMovie]));
  }, []);

  fetchMovieDetails().then((data) => console.log(data));

  console.log(movieData);

  return <div>App</div>;
};

export default App;
