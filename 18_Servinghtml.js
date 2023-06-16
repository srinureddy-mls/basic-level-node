const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello, World!</h1>');
  } else if (req.url === '/api') {
    const data = { message: 'Hello, JSON!' };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
  } else {
    res.writeHead(404);
    res.end('Page not found');
  }
});
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
