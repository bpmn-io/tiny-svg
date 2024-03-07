import pkg from './package.json';

const pkgExport = pkg.exports['.'];

export default [
  {
    input: 'lib/index.js',
    output: [
      { file: pkgExport.import, format: 'es', sourcemap: true }
    ]
  }
];