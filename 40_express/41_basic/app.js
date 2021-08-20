const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const port = 3000

//true : qs 확장모듈, false : querystring
app.use(bodyParser.urlencoded({ extended: false }));

//바디메시지가 JSON 형식으로
app.use(bodyParser.json());

//정적파일 위치 설정
//127.0.0.1:3000/music.html
app.use(express.static("public"))
//127.0.0.1:3000/static/music.html

app.listen(port, () =>
  console.log("listening")
);

//127.0.0.1:3000/music?singer=아이유&title=좋은날no


app.get('/music', (req, res) => {
  res.send(`${req.query.singer}의 ${req.query.title}입니다.`);
})

/////error
//app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`)
app.get("/",(req,res)=> res.send("hello world"))
//url 파라메터 방식
app.get('/music/:singer/:title', (req, res)=> {
  //console.log('req.params:', req.params);
  const { singer, title } = req.params;
  res.send('url parameter(get) -> title:' + title + ', singer:' + singer);
});







//post 방식
// http Method GET(조회), Post(생성), put(수정), delete(삭제)
// Http message = header + Body
// get : header부에 데이터를 전송, 길이 제한 있음, Caching O
// Post : Body부에 데이터를 전송, 길이 제한 없음


app.post("/music", (req, res) => {
  const { singer, title } = req.body;
  res.send(`url encoded(post) -> ${singer}의 ${title}`);
});

//URL 파라미터 방식
app.post("/music/:singer/:title", (req, res) => {
  //객체 구조 분해 할당(비구조화)
  const { singer, title } = req.params;
  res.send(`url parameter(post) -> ${singer}의 ${title}입니다.`)
})

app.put("/music/:id", (req, res) => {
  const id = req.params.id;
  const { singer, title } = req.body;
  // {id} -> 아이유의 좋은날로 수정됨
  res.send(`${id} -> ${singer}의 ${title}로 수정됨`);
})

app.use((req, res, next) => {
  const error = new Error("없는 페이지입니다!");
  error.code = 404;
  next(error);
  //throw new Error("없는 페이지입니다!");
})

///오류 처리 미들웨어
app.use((err, req, res, next) => {
  //if (err.code) res.status(err.code);
  //else res.status(500);
  res.status(err.code || 500)
  //if (err.message) res.send(err.message)
  //else res.send("Internal Server Error");
  res.send(err.message || "Internal Server Error");
})

// CRUD
// GET (조회)
// - query string -> req.query.xxx
// - url parameter -> req.params.xxx
// POST (생성)
// - form body -> req.body.xxx (body-parser)
// - url parameter -> req.params.xxx
// Put (수정)
// Delete (삭제)


// REST API
// 1. HTTP 요청 시 자원을 명시
// ex) Get /userrs, Get /users
