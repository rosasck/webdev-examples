const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
   res.status(200);
  res.set({ 'Content-Type': 'text/plain' });
  res.send('Hello Welcome!');
  res.return()
});

app.get('/about', (req, res) => {
  res.status(404);
  res.set({ 'Content-Type': 'text/html' });
  res.send('This is an error type! ');
});


app.listen(5000);