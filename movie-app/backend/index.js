const express = require('express');
const cors = require('cors'); // ← import cors
const app = express();
const port = 3001;

// Enable CORS for your frontend origin
app.use(cors({
  origin: 'http://a5007a8954fb84713a962829f408f5bb-472749424.us-east-1.elb.amazonaws.com' // replace with your actual frontend IP/domain
}));

const movies = [
  { id: 1, title: 'The Shawshank Redemption', year: 1994 },
  { id: 2, title: 'The Godfather', year: 1972 },
  { id: 3, title: 'Inception', year: 2010 },
  { id: 4, title: 'Mission Majnu', year: 2023 },
  { id: 5, title: 'UGLY', year: 2025 }
];

app.get('/movies', (req, res) => {
  res.json(movies);
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
