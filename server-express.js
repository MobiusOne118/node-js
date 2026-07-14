import express from 'express';
// const express = require('express');
const app = express();
const port = 8080;
const headers = {
  "content-type": "application/json"
};


// Define route for GET
app.get('/', (req, res) => {
  res.send('Hello World via Express!');
});

app.get('/about/:name', (req, res) => {
  const { name } = req.params;
  const id = req.query.id;

  const response = JSON.stringify({ name, id });

  res.writeHead(200, headers);
  headers["content-length"] = response.length;
  res.end(response);
});

// Start the server
app.listen(port, () => {
  console.log(`App-Express listening on localhost:${port}`);
});