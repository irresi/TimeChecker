//스키마 정의
const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  Name: {
    type: String,
    trim: true,
    required: true
  },
  StartString: {
    type: String,
    trim: true,
    required: true
  },
  EndString: {
    type: String,
    trim: true,
    required: true
  },
  tag:{
    type: String,
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

// 모델 생성
// model(모델명, 스키마) -> 모델명s 컬렉션에 작업함
// model(모델명, 스키마, 컬렉션명) 
const Event = mongoose.model("Event", EventSchema);
module.exports = Event;