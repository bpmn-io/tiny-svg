import pkg from './package.json';

const pkgExport = pkg.exports['.'];

export default [
  {
    input: pkg.source,
    output: [
      { file: pkgExport, format: 'es', sourcemap: true }
    ]
  }
];