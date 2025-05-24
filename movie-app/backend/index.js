const express = require('express');
const app = express();
const port = 3001;

const movies = [
  { id: 1, title: "The Shawshank Redemption", year: 1994 },
  { id: 2, title: "The Godfather", year: 1972 },
  { id: 3, title: "Inception", year: 2010 }
];

app.get('/movies', (req, res) => {
  res.json(movies);
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});

