var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var errorHandlers = require('./_errorHandlers');

exports.less = function() {
  return gulp.src('src/less/styles.less')
    .pipe(plugins.less().on('error', errorHandlers.createForTask('less')))
    .pipe(gulp.dest('build/'));
};
