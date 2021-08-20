// 웹 어플리케이션 = 프론트엔드(화면) + 백엔드(서버), 풀스택
// JS => 프론트엔드(브라우저 내 동작)
// HTML, CSS, Javascript
 
//1. 크롬 V8 엔진 -> 용도 변경(브라우저 밖으로)
//2. 이벤트 기반의 비동기 I/O
//3. 모듈 시스템 기반 

// Node.js로 Hello, World 출력
// 1.REPL
// 2.콘솔에 출력
console.log('Hello, World')
// 3.웹서버로 출력
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

//1=="1" 값만 비교
//1==="1" 값 + 타입 비교
const server = http.createServer((req, res) => {
    const url=req.url;
    if (url === "/") {
        res.statusCode = 200; //OK
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World');
    } else if (url === "/html") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("<!DOCTYPE html>");
        res.write("<html>");
        res.write("<body><h1>HEllo, World</h1><body>");
        res.end("</html>");
    } else if (url === '/json') { //127.0.0.1:3000/json
        const data = { msg: "Hello, World" };
        res.statusCode = 200; //OK
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
    } else {
        res.statusCode = 404;
        res.end("<html><h1>Not Found");
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
