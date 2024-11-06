const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server  = http.createServer((req, res) => {
    if(req.url==="/"){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, ice tea!\n');
  } else if(req.url==="/ice-tea"){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Ice tea rocks yea buddy\n');
  } else{
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 Not found\n');
  }
});

server.listen(port, hostname, () => {
    console.log(`Server listening at http://${hostname}:${port}/`);
});