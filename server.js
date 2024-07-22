const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist/news-recomendation-web')));

// Send all requests to index.html
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/news-recomendation-web/index.html'));
});

// Listen on the port provided by Heroku or default to 8080
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
