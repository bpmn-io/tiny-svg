module.exports = function(karma) {
  karma.set({

    basePath: '../../',

    frameworks: [ 'mocha', 'chai' ],

    files: [
      'dist/tiny-svg.js',
      'test/integration/**/*.js'
    ],

    reporters: [ 'progress' ],

    browsers: [ 'PhantomJS' ],

    singleRun: true,
    autoWatch: false
  });
};
