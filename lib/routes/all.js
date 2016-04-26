var express = require('express')
  , menu = require('./menu')
  , posts = require('./posts')
  , comments = require('./comments')
  ;
    
var app = express();

// menus
app.use('/menu', menu);

// posts
app.use('/posts', posts);

// comments
app.use('/comments', comments);

module.exports = app;