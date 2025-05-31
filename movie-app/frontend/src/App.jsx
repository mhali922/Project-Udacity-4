import React, { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_MOVIE_API_URL || "http://localhost:3001/movies")
      .then((res) => res.json())
      .then(setMovies)
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Movies List</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.id}. {movie.title} ({movie.year})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

