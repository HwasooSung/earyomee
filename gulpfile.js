'use strict';

var gulp = require('gulp')
  , mocha = require('gulp-mocha')
  , jshint = require('gulp-jshint')
  , jshintStylish = require('jshint-stylish')
  ;
  
var JS_SOURCES = ['./lib/**/*.js', 'index.js', '!./lib/**/*_before.js'];


// gulp.task('mocha');

gulp.task('jshint', function () {
  return gulp.src(JS_SOURCES)
    .pipe(jshint())
    .pipe(jshint.reporter(jshintStylish));
});

gulp.task('default', ['jshint']);


// var currentFolderJsFile = './*.js'
//   , libFolderJsFile = './lib/**/*.js'
//   ;
  
// // gulp.task('uglify', function () {
// //   return gulp.src([currentFolderJsFile, libFolderJsFile])
// //     .pipe(uglify())
// //     .pipe(concat('main.min.js'))
// //     .pipe(gulp.dest('dist'));
// // });

// gulp.task('watch', function () {
//   gulp.watch([currentFolderJsFile, '!gulpfile.js', libFolderJsFile], ['uglify']);
// });

// gulp.task('default', ['uglify', 'watch']);  
  
  
// gulp.task('hello', function () {
//   return console.log('Hello');
// });


// gulp.task('world', function () {
//   return console.log('World');
// });

// gulp.task('default', ['world']);

// var gulp = require('gulp')
//   // , concat = require('gulp-concat')
//   , uglify = require('gulp-uglify')
//   , jshint = require('gulp-jshint')
//   , mocha = require('gulp-mocha')
//   ;
  
// var libJsFile = 'lib/**/*.js'
//   , testJsFile = 'test/api/**/*.js'
//   ;
  
// gulp.task('lint', function () {
//   return gulp
//           .src(['index.js', libJsFile])
//           .pipe(jshint())
//           .pipe(jshint.reporter('default'));
// });

// gulp.task('test', function () {
//   return gulp
//           .src(testJsFile)
//           .pipe(mocha());
// });

// gulp.task('default', ['lint', 'test'], function () {
//   gulp.watch([libJsFile, testJsFile], function () {
//     //gulp.run('lint', test);
//   });
// });