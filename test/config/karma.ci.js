module.exports = function(karma) {

  // Browsers to run on Sauce Labs
  var customLaunchers = {
    'SL_Chrome': {
      base: 'SauceLabs',
      browserName: 'chrome'
    },
    'SL_Firefox': {
      base: 'SauceLabs',
      browserName: 'firefox'
    },
    'SL_IE': {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      version: '9'
    },
    'SL_Android': {
      base: 'SauceLabs',
      browserName: 'android'
    }
  };

  karma.set({

    basePath: '../../',

    frameworks: [ 'browserify', 'mocha', 'chai' ],

    files: [
      'test/spec/**/*.js'
    ],

    preprocessors: {
      'test/spec/**/*.js': [ 'browserify' ]
    },

    reporters: [ 'dots', 'saucelabs' ],

    captureTimeout: 120000,

    customLaunchers: customLaunchers,

    browsers: Object.keys(customLaunchers),

    singleRun: true,
    autoWatch: false,
  });
};