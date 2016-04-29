var loader = require('./utils/bower-dependencies-loader');

var polyfill = [];

var appFilesAndTests = [
  'src/bower_components/angular-mocks/angular-mocks.js',
  'src/app/**/*.js'
];

var karmaFiles = polyfill
  .concat(loader.getBowerFiles())
  .concat(appFilesAndTests);

module.exports = function(config) {

  config.set({
    basePath: '../',
    files: karmaFiles,
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],  // PhantomJS nebo Chrome
    plugins: [
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-coverage'
    ],
    autoWatch: true,
    singleRun: false,
    reporters: ['progress', 'coverage'],
    preprocessors: {'src/**/*.js': ['coverage']},
    coverageReporter: {
      type: 'html',
      dir: 'report/',
      file: 'report.html'
    }

  });
};
