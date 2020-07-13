//스키마 정의
const mongoose = require("mongoose");

const GoalSchema = new mongoose.Schema({
  str: {
    type: String,
    trim: true
  }
});

// 모델 생성
// model(모델명, 스키마) -> 모델명s 컬렉션에 작업함
// model(모델명, 스키마, 컬렉션명) 
const Goal = mongoose.model("Goal", GoalSchema);
module.exports = Goal;