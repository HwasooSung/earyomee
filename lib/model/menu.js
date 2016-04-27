var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId
  ;
  
var MenuSchema = new Schema({
  name: { type: String, required: true },
  posts: { type: [ObjectId] } 
});

var MenuModel = mongoose.model('menu', MenuSchema);

module.exports = MenuModel;