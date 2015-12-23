// npm install gulp gulp-ruby-sass --save-dev

(function() {
  'use strict';

  var gulp = require('gulp'),
  	sass = require('gulp-ruby-sass');

  gulp.task('default', function () {

  	return sass('scss/main.scss', {
        require: ['susy'],
        style: 'compressed'
      }).on('error', sass.logError)
      .pipe(gulp.dest('css'));
  });

  // Autocompile
  gulp.task('watch', function() {
  	gulp.watch('scss/**/*', ['default']);
  });

}());
