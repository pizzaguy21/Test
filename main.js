const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.ejs');
});

app.get('/about.html', (req, res) => {
  res.sendFile(__dirname + '/about.html');
});

app.get('/index.ejs', (req, res) => {
  res.sendFile(__dirname + '/index.ejs');
});

app.get('/info.html', (req, res) => {
  res.sendFile(__dirname + '/info.html');
});

// 404 handler - should be the last route
app.use((req, res) => {
  res.status(404);
  res.send('<h1>404</h1>');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
