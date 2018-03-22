import uglify from 'rollup-plugin-uglify';

import pkg from './package.json';

export default [
  // browser-friendly UMD build
  {
    input: 'lib/index.js',
    output: {
      name: 'TinySVG',
      file: pkg.browser,
      format: 'umd'
    }
  },
  {
    input: 'lib/index.js',
    output: {
      name: 'TinySVG',
      file: pkg.browser.replace(/\.js$/, '.min.js'),
      format: 'umd'
    },
    plugins: [
      uglify()
    ]
  },
  {
    input: 'lib/index.js',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ]
  }
];