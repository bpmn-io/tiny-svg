module.exports = function(karma) {
  karma.set({

    basePath: '../../',

    frameworks: [ 'browserify', 'mocha', 'chai' ],

    files: [
      'test/spec/**/*.js'
    ],

    preprocessors: {
      'test/spec/**/*.js': [ 'browserify' ]
    },

    reporters: [ 'progress' ],

    browsers: [ 'PhantomJS' ],

    singleRun: false,
    autoWatch: true,

    // browserify configuration
    browserify: {
      debug: true
    }
  });
};
