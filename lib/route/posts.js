var express = require('express')
  , postController = require('../controller/posts.js')
  ;

var app = express();


app.get('/posts', postController.showPost);

module.exports = app;

/*
 * module.exports vs exports.VARIABLE
*/

// exports.routes = app;
// app.get('/posts/add/:id', postController.newPost);
// app.post('/posts/add/:id', postController.addPost);

// app.get('/posts/edit/:id', postController.modifyPostInfo);
// app.put('/posts/edit/:id', postController.editPost);

// app.delete('/posts/delete/:id', postController.deletePost);
