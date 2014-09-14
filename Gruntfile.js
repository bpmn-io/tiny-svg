module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  /* global process */

  // configures browsers to run test against
  // any of [ 'PhantomJS', 'Chrome', 'Firefox', 'IE']
  var TEST_BROWSERS = ((process.env.TEST_BROWSERS || '').replace(/^\s+|\s+$/, '') || 'PhantomJS').split(/\s*,\s*/g);


  // project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    env: { },

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
      development: {
        options: {
          browserifyOptions: {
            builtins: false,
            detectGlobals: false,
            insertGlobalVars: [],
            debug: true,
            standalone: 'tsvg'
          }
        },
        files: {
          '<%= config.dist %>/<%= pkg.name %>.js': 'index.js'
        }
      },

      min: {
        options: {
          browserifyOptions: {
            builtins: false,
            detectGlobals: false,
            insertGlobalVars: [],
            standalone: 'tsvg'
          },
          plugin: [ require('bundle-collapser/plugin') ]
        },
        files: {
          '<%= config.dist %>/<%= pkg.name %>.prod.js': 'index.js'
        }
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */\n',
      },

      development: {
        files: {
          '<%= config.dist %>/<%= pkg.name %>.min.js': '<%= config.dist %>/<%= pkg.name %>.js'
        }
      },

      min: {
        files: {
          '<%= config.dist %>/<%= pkg.name %>.prod.min.js': '<%= config.dist %>/<%= pkg.name %>.prod.js'
        }
      },

      inlined: {
        files: {
          '<%= config.dist %>/<%= pkg.name %>.inlined.min.js': '<%= config.dist %>/<%= pkg.name %>.inlined.js'
        }
      }
    },

    compress: {
      dist: {
        options: {
          mode: 'gzip'
        },
        files: [ {
          expand: true,
          cwd: 'dist/',
          src: ['*.js'],
          dest: 'dist/compressed/'
        } ]
      }
    },

    jsdoc: {
      dist: {
        src: [ '<%= config.sources %>/**/*.js', 'index.js' ],
        options: {
          destination: 'docs/api'
        }
      }
    }
  });

  // tasks

  grunt.registerTask('test', [ 'karma:single' ]);

  grunt.registerTask('auto-test', [ 'karma:unit' ]);

  grunt.registerTask('default', [ 'jshint', 'test', 'browserify', 'uglify', 'compress', 'jsdoc' ]);
};