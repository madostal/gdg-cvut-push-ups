var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var styles = require('./gulp-tasks/styles');
var scriptsDevel = require('./gulp-tasks/scripts-devel');

gulp.task('less', styles.less);

gulp.task('devel-app-js', scriptsDevel.appScriptsProcessing);
gulp.task('devel-vendor-js', scriptsDevel.bowerFilesToVendor);

gulp.task('devel', ['less', 'devel-app-js', 'devel-vendor-js'], function() {
  var server = plugins.liveServer.static(['src', 'build'], 8080);
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
