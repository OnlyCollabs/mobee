import React, { useEffect, useState } from "react";

const App = () => {
  const [movie, setMovie] = useState("");
  // const [key, setKey] = useState(0);
  const maxPage = 500;
  const maxMovieNo = 19;
  const regex = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g;

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
    fetchData().then((data) => setMovie(data.results[selectMovie].title));
  }, []);

  const words = movie.split(" ");

  // console.log(words);

  const letters = words.map((e) => {
    return e.split("");
  });
  // console.log(letters);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {letters.map((letter) =>
        letter.map((l) =>
          l.replace(/[^a-zA-Z0-9]/g, "") !== "" ? (
            <p
              // key={key}
              style={{
                padding: "0.5rem",
                border: "1px solid black",
                margin: "0.5rem",
              }}
            >
              {l.toUpperCase()}
            </p>
          ) : null
        )
      )}
    </div>
  );
};

export default App;
