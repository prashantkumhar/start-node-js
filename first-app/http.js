const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello world');
    res.end();
  }
  if (req.url === '/api/courses') {
    res.write(JSON.stringify([1,2,3,4,5,6]));
    res.end();
  }
});

server.on('connection', (socket) => {
  console.log('new Connection...');
});

server.listen(100);

console.log('http module in nodejs');