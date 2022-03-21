import React, { useEffect, useState } from "react";

const App = () => {
  const [movie, setMovie] = useState(""); // const [key, setKey] = useState(0);
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

  const containsSpecialChar = (char) => {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(char);
  };

  useEffect(() => {
    const selectMovie = Math.floor(Math.random() * maxMovieNo) + 1;
    fetchData().then((data) => setMovie(data.results[selectMovie].title));
  }, []);

  const words = movie.split(" "); // console.log(words);

  const letters = words.map((e) => {
    return e.split("");
  }); // console.log(letters);
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {letters.map((letter) => (
        <div className="mr-6">
          <div>
            {letter.map((l, index) => (
              <span
                key={index}
                className={`${
                  containsSpecialChar(l)
                    ? "p-2"
                    : "p-3 px-4 border-2 border-solid border-black"
                } mx-1 text-2xl font-bold`}
              >
                {l.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
