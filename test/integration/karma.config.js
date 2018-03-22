var pkg = require('../../package');

module.exports = function(karma) {
  karma.set({

    basePath: '../../',

    frameworks: [ 'mocha', 'chai' ],

    files: [
      pkg.browser,
      'test/integration/**/*.js'
    ],

    reporters: [ 'progress' ],

    browsers: [ 'PhantomJS' ],

    singleRun: true,
    autoWatch: false
  });
};
