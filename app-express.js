const express = require('express');
const app = express();
const port = 8080;

// Define route for GET
app.get('/', (req, res) => {
  res.send('Hello World via Express!');
});

// Start the server
app.listen(port, () => {
  console.log(`App-Express listening on localhost:${port}`);
});