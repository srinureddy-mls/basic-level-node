//Streams & Buffers

const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
  // Set the response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Create a readable stream from a file
  const readableStream = fs.createReadStream('data.txt');
  // Pipe the readable stream to the response
  readableStream.pipe(res);
});
// Start the server and listen on port 3000
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});