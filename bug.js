const http = require('http');

const server = http.createServer((req, res) => {
  // Handle request here
  console.log('Request received');
  res.end('Hello from Node.js!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});