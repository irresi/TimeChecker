var GoalModel = require("../../models/goal");
const mongoose = require("mongoose");

const set = (req, res) => {
  console.log("set called");
  GoalModel.findOne((err, result) => {
    if (err) return res.status(500).end();
    res.render("goal/set", {result});
  });
}

const obj = (req, res) => {
  const str = req.body.str;
  console.log(str);
  if (!str) return res.status(400).send("입력값 오류입니다.");
  // save() : 모델의 instance인 document를 생성
  GoalModel.remove(function (err, result) {
    if (err) return handleError(err);
  });
  let goal = new GoalModel({ str });
  goal.save((err, result) => {
    if (err) return res.status(500).send("입력값 없음");
    res.status(201).json(result);
  });
}
module.exports = { set, obj};
