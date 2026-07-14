import express from 'express';
// const express = require('express');
const app = express();
const port = 8080;

// Define route for GET
app.get('/', (req, res) => {
  res.send('Hello World via Express!');
});

app.get('/about', (req, res) => {
  res.send('About page');
});

// Start the server
app.listen(port, () => {
  console.log(`App-Express listening on localhost:${port}`);
});