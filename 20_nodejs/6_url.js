// 기본모듈
// url : URL 처리하는 모듈
const url = require("url");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const obj = url.parse(req.url, true);
  console.log(obj);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.write(`${obj.query.year}학년 ${obj.query.class}반 ${obj.query.name}입니다 안녕!\n`);
  res.end('Hello Worlds');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});