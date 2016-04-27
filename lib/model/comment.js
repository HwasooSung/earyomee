var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.Types.ObjectId
  ;
  
var CommentSchema = new Schema({
  // 댓글 쓴 사람 이름
  writerName: { type: String, required: true},
  // 댓글 글 쓴 사람 비밀 번호
  password: { type: String, required: true},
  // 댓글 쓴 사람 email
  email: { type: String },
  // 댓글 내용 
  text: { type: String, required: true },
  // 댓글 쓴 날짜
  written: { type: Date, default: Date.now },
  // 댓글 수정한 날짜
  edited: { type: Date, default: Date.now },
  // 대댓글 리스트
  comments: { type: [ ObjectId ] }
});

var CommentModel = mongoose.model('comment', CommentSchema);

module.exports = CommentModel;