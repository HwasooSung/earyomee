var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.Types.ObjectId
  ;
  
var PostSchema = new Schema({
  // 글 쓴 사람 
  author: { type: ObjectId, required: true }, // 어짜피 나만 쓸 건데 어카지
  // 글 제목
  title: { type: String, required: true},
  // 글 내용
  text: { type: String, required: true },
  // 댓글들
  comments: { type: [ObjectId] },
  // 글 쓴 날짜
  written: { type: Date, default: Date.now },
  // 수정한 날짜
  edited: { type: Date, default: Date.now },
  // 글에 접근한 횟수
  readCount: { type: Number, required: true, default: 0 }
});

var PostModel = mongoose.model('Post', PostSchema);

module.exports = PostModel;
