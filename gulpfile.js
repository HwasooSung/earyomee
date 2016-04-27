var gulp = require('gulp')
  // , concat = require('gulp-concat')
  , jshint = require('gulp-jshint')
  , mocha = require('gulp-mocha')
  ;
  
var libJsFile = 'lib/**/*.js'
  , testJsFile = 'test/api/**/*.js'
  ;
  
gulp.task('lint', function () {
  return gulp
          .src(['index.js', libJsFile])
          .pipe(jshint())
          .pipe(jshint.reporter('default'));
});

gulp.task('test', function () {
  return gulp
          .src(testJsFile)
          .pipe(mocha());
});

gulp.task('default', ['lint', 'test'], function () {
  gulp.watch([libJsFile, testJsFile], function () {
    gulp.run('lint', test);
  });
});