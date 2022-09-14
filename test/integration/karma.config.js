process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function(karma) {
  karma.set({

    basePath: '../../',

    frameworks: [ 'mocha', 'chai' ],

    files: [
      'dist/tiny-svg.js',
      'test/integration/**/*.js'
    ],

    reporters: [ 'progress' ],

    browsers: [ 'ChromeHeadless' ],

    singleRun: true,
    autoWatch: false
  });
};
