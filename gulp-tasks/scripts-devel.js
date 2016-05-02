var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var mainBowerFiles = require('main-bower-files');
var errorHandlers = require('./_errorHandlers');

var pseudoconcatOptions = {webRoot: 'src/'};
var livereloadPath = '//localhost:35729/livereload.js';

exports.appScriptsProcessing = function() {

  return gulp.src('src/app/**/*.js')
    .pipe(plugins.eslint())
    .pipe(plugins.eslint.result(errorHandlers.eslintFailOnFatalError)
      .on('error', errorHandlers.createForTask('eslint failOnFatalError')))
    .pipe(plugins.eslint.format())
    .pipe(plugins.ignore.exclude('*.spec.js'))
    .pipe(plugins.angularFilesort().on('error', errorHandlers.createForTask('angularFilesort')))
    .pipe(plugins.pseudoconcatJs('scripts.js', pseudoconcatOptions))
    .pipe(gulp.dest('build/'));
};

exports.bowerFilesToVendor = function() {
  return gulp.src(mainBowerFiles('**/*.js'))
    .pipe(plugins.pseudoconcatJs('vendor.js', pseudoconcatOptions, [livereloadPath]))
    .pipe(gulp.dest('build/'));
};
