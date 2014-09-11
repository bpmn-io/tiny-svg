module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  /* global process */

  // configures browsers to run test against
  // any of [ 'PhantomJS', 'Chrome', 'Firefox', 'IE']
  var TEST_BROWSERS = ((process.env.TEST_BROWSERS || '').replace(/^\s+|\s+$/, '') || 'PhantomJS').split(/\s*,\s*/g);


  // project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    config: {
      sources: 'lib',
      tests: 'test',
      dist: 'dist'
    },

    release: {
      options: {
        tagName: 'v<%= version %>',
        commitMessage: 'chore(project): release v<%= version %>',
        tagMessage: 'chore(project): tag v<%= version %>'
      }
    },

    jshint: {
      src: ['<%= config.sources %>'],

      options: {
        jshintrc: true
      }
    },

    karma: {
      options: {
        configFile: '<%= config.tests %>/config/karma.unit.js',
      },
      single: {
        singleRun: true,
        autoWatch: false,

        browsers: TEST_BROWSERS,

        browserify: {
          watch: false,
          debug: true
        }
      },
      unit: {
        browsers: TEST_BROWSERS,
        debug: true
      }
    },

    browserify: {
      options: {
        browserifyOptions: {
          builtins: false,
          detectGlobals: false,
          insertGlobalVars: [],
          debug: true
        },

        plugin: [ require('bundle-collapser/plugin') ]
      },

      lib: {
        files: {
          '<%= config.dist %>/tsvg.js': [ '<%= config.sources %>/*.js' ],
        }
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */',
      },
      lib: {
        files: {
          '<%= config.dist %>/tsvg.min.js': [ '<%= config.dist %>/tsvg.js' ]
        }
      }
    },

    jsdoc: {
      dist: {
        src: [ '<%= config.sources %>/**/*.js' ],
        options: {
          destination: 'docs/api',
          plugins: [ 'plugins/markdown' ]
        }
      }
    }
  });

  // tasks

  grunt.registerTask('test', [ 'karma:single' ]);

  grunt.registerTask('auto-test', [ 'karma:unit' ]);

  grunt.registerTask('default', [ 'jshint', 'test', 'browserify', 'uglify', 'jsdoc' ]);
};