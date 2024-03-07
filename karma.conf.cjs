/* eslint-env node */

// configures browsers to run test against
// any of [ 'ChromeHeadless', 'Chrome', 'Firefox', 'IE', 'PhantomJS' ]
process.env.CHROME_BIN = require('puppeteer').executablePath();

const browsers = (process.env.TEST_BROWSERS || 'ChromeHeadless').split(',');

module.exports = function(karma) {
  karma.set({

    frameworks: [
      'webpack',
      'mocha',
      'chai'
    ],

    files: [
      'test/spec/**/*.js'
    ],

    preprocessors: {
      'test/spec/**/*.js': [ 'webpack' ]
    },

    reporters: [ 'progress' ],

    browsers: browsers,

    singleRun: true,
    autoWatch: false,
    webpack: {}
  });
};
