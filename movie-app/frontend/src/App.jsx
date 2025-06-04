import React, { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("http://a581e3170981148a5a2c27a86c38f26c-1987784997.us-east-1.elb.amazonaws.com/movies")
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

