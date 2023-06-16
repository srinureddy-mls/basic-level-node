//Clients & Servers

const http = require('http');
const server = http.createServer((req, res) => {
  // Set the response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Send a response back to the client
  res.end('Hello, client!');
});
// Start the server and listen on port 3000
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});





