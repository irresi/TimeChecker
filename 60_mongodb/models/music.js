//스키마 정의
const mongoose = require("mongoose");

const MusicSchema = new mongoose.Schema({
  singer: {
    type: String,
    trim: true,
    required: true
  },
  title: {
    type: String,
    trim: true,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

// 모델 생성
// model(모델명, 스키마) -> 모델명s 컬렉션에 작업함
// model(모델명, 스키마, 컬렉션명) 
const Music = mongoose.model("music", MusicSchema);
module.exports = Music;