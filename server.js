import { createServer } from 'http';
import { mechsRoutes } from './src/routes/mech.js'

const hostname = 'localhost';
const port = 8080;

//
// Using async here to mock promise.
//
const server = createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

  // Direct to route
  if(req.url.startsWith('/mechs')) {
    await mechsRoutes(req, res);
  } else {
    res.writeHead(200);
    res.end('Server: No route selected');
  }
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
