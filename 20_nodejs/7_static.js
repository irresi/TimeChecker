const http = require("http");
const path = require("path");
const fs = require("fs");

const hostname = '127.0.0.1';
const port = 3000;

//127.0.0.1:3000/dog.jpg
const server = http.createServer((req, res) => {
  const obj = path.parse(req.url);
  console.log(obj);
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});