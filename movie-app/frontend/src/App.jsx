import React, { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
  const apiUrl = process.env.REACT_APP_MOVIE_API_URL.replace(/\/$/, "");
  fetch(`${apiUrl}/movies`)
    .then(response => response.json())
    .then(data => setMovies(data))
    .catch(error => console.error(error));
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

