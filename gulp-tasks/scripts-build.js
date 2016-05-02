var merge = require('merge2');
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var mainBowerFiles = require('main-bower-files');
var errorHandlers = require('./_errorHandlers');

exports.appScriptsProcessing = function() {

  return merge(
    gulp.src('src/app/**/*.js')
      .pipe(plugins.eslint())
      .pipe(plugins.eslint.result(errorHandlers.eslintFailOnFatalError)
        .on('error', errorHandlers.createForTask('eslint failOnFatalError')))
      .pipe(plugins.eslint.format())
      .pipe(plugins.ignore.exclude('*.spec.js'))
    ,
    gulp.src('src/app/**/*.html')
      .pipe(plugins.htmlmin({collapseWhitespace: true}))
      .pipe(plugins.angularTemplatecache('templates.js', {
          module: 'cz.angular.pushups.dashboard', // http://stackoverflow.com/questions/24658966/using-templatecache-in-ui-routers-template
          base: process.cwd() + '/src/',
          standalone: false
        })
      )
  )
    .pipe(plugins.angularFilesort().on('error', errorHandlers.createForTask('angularFilesort')))
    .pipe(plugins.ngAnnotate())
    .pipe(plugins.concat('scripts.js'))
    .pipe(plugins.uglify())
    .pipe(gulp.dest('dist/'));
};

exports.bowerFilesToVendor = function() {
  return gulp.src(mainBowerFiles('**/*.js'))
    .pipe(plugins.concat('vendor.js'))
    .pipe(plugins.uglify())

    .pipe(gulp.dest('dist/'));
};
