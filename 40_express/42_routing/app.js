const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;


//로깅 미들웨어 설정
app.use(logger("dev")); //tiny < dev < short < common < combined

//true: qs(확장모듈), false: querystring(기본모듈)
app.use(bodyParser.urlencoded({ extended: false }));

//바디메시지가 JSON 형식으로 전달되는 경우
app.use(bodyParser.json());


app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);

//라우팅 모듈 설정
app.use("/api", require("./api"));  //index 생략

//여기까지 내려왔다는 것은 위에서 처리가 되지 않음
app.use((req, res, next) => {
    //const error = new Error("없는 페이지입니다!!");
    //error.code = 404;
    //next(error);
    throw new Error();
});

//오류 처리 미들웨어
app.use((err, req, res, next) => {
    //if(err.code) res.status(err.code);
    //else res.status(500);   //Internal Server Error
    res.status(err.code || 500);
    //if(err.message) res.send(err.message);
    //else res.send("Internal Server Error");
    res.send(err.message || "Internal Server Error");
});

/*
    CRUD
    create, read, update, delete
    HTTP Method: GET(조회), POST(생성), PUT(수정), DELETE(삭제)
    HTTP Message = Header + Body
    GET: Hdader부에 데이터를 전송, 길이의 제한 있음, Caching 있음
    POST: Body부에 데이터를 전송, 길이의 제한 없음, Caching 없음
    채용시스템: company.com/apply?id=10002 -> 해킹사고
*/

//GET (조회)
// - query string -> req.query.xxx
// - url parameter -> req.params.xxx
//POST (생성)
// - form body -> req.body.xxx (body-parser)
// - url parameter -> req.params.xxx
//PUT (수정)
//DELETE (삭제)

//REST API
//1. HTTP 용청 시 자원을 명시 (명사)
// ex) GET /users, GET /users/1
// test.com/users : GET, users/1 : GET (조회)
// test.com/users : POST (생성)
// test.com/users : PUT (수정)
// test.com/users : DELETE (삭제)
// (bad case)
// test.com/users/search
// test.com/users/cerate
// test.com/users/update
// test.com/users/delete

/*
    const a = (b) => (c) => b * c;
    babel
*/