var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var gutil = require('gulp-util');

var codeFrame = require('babel-code-frame');
var fs = require('fs');
var path = require('path');

// http://gotofritz.net/blog/geekery/how-to-prevent-less-errors-stopping-gulp-watch/
exports.createForTask = function(taskName, verbose) {
  return function(err) {
    verbose
      ? gutil.log(gutil.colors.red("Error in ", taskName), err, arguments)
      : gutil.log(gutil.colors.red("Error in ", taskName, err.message));

    this.emit("end", new gutil.PluginError(taskName, err, {showStack: true}));
  };
};

exports.eslintFailOnFatalError = function(result, done) {
  var fatalMessage = result.messages.filter(function(message) {
    return Boolean(message.fatal)
  });

  if (!fatalMessage.length) {
    done(null, result);
    return;
  }
  var filePath = result.filePath;
  var data = fs.readFileSync(filePath, 'utf8');

  var frame = codeFrame(data, fatalMessage[0].line, fatalMessage[0].column);
  var content = '__processError(' + JSON.stringify({
      name: "Fatal error",
      message: fatalMessage[0].message + ' file: ' + filePath + ' (' + fatalMessage[0].line + ':' + fatalMessage[0].column + ')',
      codeFrame: frame
    }) + ');';

  var fileName = path.join(process.cwd(), 'build/error.js');
  fs.writeFileSync(fileName, content);
  fatalMessage[0].message += '\n' + frame;

  gulp.src(['utils/browser-process-error.js', 'utils/vt100tocss.js', 'build/error.js'])
    .pipe(plugins.concat('scripts.js'))
    .pipe(gulp.dest('build/'));

  done(null, result);

};
