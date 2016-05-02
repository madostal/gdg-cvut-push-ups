var del = require('del');
var runSequence = require('run-sequence');

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var assets = require('./gulp-tasks/assets');
var styles = require('./gulp-tasks/styles');
var scriptsBuild = require('./gulp-tasks/scripts-build');
var scriptsDevel = require('./gulp-tasks/scripts-devel');
var revisions = require('./gulp-tasks/revisions');

gulp.task('less', styles.less);

gulp.task('devel-app-js', scriptsDevel.appScriptsProcessing);
gulp.task('devel-vendor-js', scriptsDevel.bowerFilesToVendor);

gulp.task('devel', ['less', 'devel-app-js', 'devel-vendor-js'], function() {
  var server = plugins.liveServer.static(['src', 'build'], 8000);
  server.start();

  gulp.watch(['src/less/**/*.less'], ['less']);
  gulp.watch(['src/app/**/*.js'], ['devel-app-js']);
  gulp.watch(['bower.json'], ['devel-vendor-js']);

  gulp.watch(['src/index.html', 'src/app/**/*.html', 'build/**/*'], function(file) {
    server.notify.apply(server, [file]);
  });

  process.on('uncaughtException', function(err) {
    console.error('uncaughtException: ', err);
    console.error(err.stack);

    server.stop().then(function() {
      console.log('server stopped');
      process.exit(-1);
    })
  });

});

gulp.task('build-clean', function() {
  return del(['dist/']);
});

gulp.task('build-assets', assets.copy);
gulp.task('build-css', styles.cssmin);
gulp.task('build-app-js', scriptsBuild.appScriptsProcessing);
gulp.task('build-vendor-js', scriptsBuild.bowerFilesToVendor);
gulp.task('build-revisions', revisions.revisions);
gulp.task('build-index', revisions.indexHtml);

gulp.task('build', function(callback) {
  runSequence('build-clean',
    ['build-app-js', 'build-vendor-js', 'build-css', 'build-assets'],
    'build-revisions',
    'build-index',
    callback);
});
