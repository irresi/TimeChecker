var EventModel = require("../../models/event");
const mongoose = require("mongoose");

//id 유효성 체크
const checkId = (req, res,next) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).end();  
  next();
}
// 등록
// - 성공 : 201 응답, 생성된 movie 객체 반환 (201 : Created)
// - 실패 : 입력값 누락 시 400 반환 (400 : Bad Request)
const create = (req, res) => {
  const Name = req.body.Name;
  const StartString = req.body.StartString; 
  const EndString = req.body.EndString;
  const tag = req.body.tag;
  const created = req.body.created;

  console.log(Name, StartString, EndString, tag, created);
  if (!Name || !StartString || !EndString || !tag) return res.status(400).send("입력값 오류입니다.");
  if (!created) return res.status(400).send("날짜 생성 오류");
  // save() : 모델의 instance인 document를 생성
  let event = new EventModel({ Name,StartString ,EndString ,tag, created });
  event.save((err, result) => {
    if (err) return res.status(500).send("입력값 없음");
    res.status(201).json(result);
  });
};

// 목록조회
// - 성공 : limit 수만큼 movie 객체를 담은 배열 리턴 (200 : OK)
// - 실패 : limit가 숫자형이 아니면 400을 응답 (400: Bad Request)
const list = (req, res) => {
  // 127.0.0.1:3000/movie?limit=2
  req.query.limit = req.query.limit || 30;
  const limit = parseInt(req.query.limit, 30);

  if (Number.isNaN(limit)) {
    return res.status(400).end();
  }

  EventModel.find((err, result) => {
    if (err) return res.status(500).end();
    //res.json(result);
    res.render("event/list", { result });
  }).limit(limit)
    .sort({ _id: -1 });
};
// 상세조회
// - 성공 : id에 해당하는 movie 객체 리턴 (200 : OK)
// - 실패 : 유효한 id가 아닌 경우 400 응답 (400 : Bad request)
//          해당하는 id가 없는 경우 404 응답(404 : Not Found)
const detail = (req, res) => {
  // 127.0.0.1:3000/users/1
  const id = req.params.id;
//  console.log(id);
  EventModel.findById(id, (err, result) => {
    if (err) return res.status(500).end();
    if (!result) return res.status(404).end();
    res.render("event/detail", { result });
  });
};
// 변경
// - 성공 : id에 해당하는 객체 반환 (200 : OK)
// - 실패 : id가 유효하지 않은 경우 400 
//        없는 id일 경우 404 응답(404 : Not Found)
const update = (req, res) => {
  // 127.0.0.1:3000/user/2
  const id = req.params.id;
  console.log("update start");
  const { Name,StartString,EndString,tag } = req.body;
  EventModel.findByIdAndUpdate(id,
    { Name,StartString,EndString,tag },
    { new : true},
    (err, result) => {
      if (err) return res.status(500).end();
      if (!result) return res.status(404).end();
      res.json(result);
    }
  )
};
// 삭제
// - 성공 : 삭제 후 결과 배열 리턴 (200 : OK)
// - 실패 : 해당 id가 없는 경우 404 (404 : Not Found)
const remove = (req, res) => {
  // 127.0.0.1:3000/users/1
  const id = req.params.id;
  
  EventModel.findByIdAndDelete(id,  (err, result) => {
    if (err) return res.status(500).end();
    if (!result) return res.status(404).end();
  })
  const limit = 30;
  EventModel.find((err, result) => {
    if (err) return res.status(500).end();
    //res.json(result);
    //res.render("event/list", { result });
    res.redirect("/api/event");
  }).limit(limit)
    .sort({ created: -1 });
};

const showCreatePage = (req, res) => {
  res.render("event/create");
}

const showUpdatePage = (req, res) => {
  const id = req.params.id;

  EventModel.findById(id, (err, result) => {
    if (err) return res.status(500).send("조회 시 오류가 발생했습니다");
    if (!result) return res.status(404).send("해당하는 정보가 없습니다");
    res.render("event/update", { result });
  })
}

const showListTag = (req, res) => {
  const tag = req.params.tag;
  var query = EventModel.findOne({ 'tag': tag });
  res.end(query);
}
module.exports = { list, detail, create, update, remove, checkId,showCreatePage,showUpdatePage, showListTag};
