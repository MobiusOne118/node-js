import { createServer } from 'http';
import { mechsRoutes } from './src/routes/mech.js'

const hostname = 'localhost';
const port = 8080;

//
// Using async here to mock promise.
//
const server = createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;


  // Direct to route
  if(req.url.startsWith('/mechs')) {
    await mechsRoutes(req, res);
  } else {
    res.writeHead(404);
    res.end('Server: No route selected');
  }
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
