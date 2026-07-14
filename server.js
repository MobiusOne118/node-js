import { createServer } from 'http';
import { mechsRoutes } from './src/routes/mech.js'

const hostname = 'localhost';
const port = 8080;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  // Direct to route
  if(req.url.startsWith('/mechs')) {
    mechsRoutes(req, res);
  } else {
    res.writeHead(200);
    res.end('Server: No route selected');
  }
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
