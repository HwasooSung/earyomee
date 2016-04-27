var express = require('express')
  , PostController = require('../controller/posts')
  ;

var app = express();

app.get('/:id', PostController.showPost);

app.get('/add', PostController.sendNewPostWindow);
app.post('/add/:id', PostController.addPost);

app.get('/edit/:id', PostController.sendEditPostWindow);
app.put('/edit/:id', PostController.editPost);

app.delete('/delete/:id', PostController.deletePost);

module.exports = app;