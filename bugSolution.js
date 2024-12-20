const http = require('http');

const server = http.createServer((req, res) => {
  try {
    // Handle request here
    console.log('Request received');
    res.end('Hello from Node.js!');
  } catch (err) {
    console.error('Error handling request:', err);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
}).on('error', err => {
  console.error('Server failed to start:', err);
});