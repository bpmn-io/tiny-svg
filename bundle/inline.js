var fs = require('fs'),
    required = require('required');

var exportName = 'tsvg';

var output = __dirname + '/../dist/tiny-svg.inlined.js';

var libExports = [
  'attr',
  'transform',
  'create',
  'remove',
  'clear',
  'replace',
  'append',
  'appendTo',
  'innerSVG',
  'on',
  'off',
  'select',
  'selectAll',
  'createMatrix',
  'createTransform',
  'createPoint'
];

var out = [];

out.push(fs.readFileSync(__dirname + '/templates/header.js', 'utf-8').replace('___lib', exportName));

required(__dirname + '/../index.js', function(err, deps) {

  if (err) {
    console.err(err);
    process.exit(1);
  }

  var entries = [],
      entryMap = {};

  function entry(id) {
    var e = entryMap[id];
    if (!e) {
      e = { id: id, deps: [], dependent: {} };
      entries.push(e);
      entryMap[id] = e;
    }

    return e;
  }

  function walk(dep, path) {

    var id = dep.filename;

    if (path.indexOf(id) !== -1) {
      throw new Error('circular dependency: ' + path.concat([ id ]).join(' -> '));
    }

    path.push(id);

    var e = entry(id);

    dep.deps.forEach(function(d) {
      e.deps.push(d.filename);
      var child = walk(d, path);
      child.dependent[id] = e;
    });

    path.pop();

    return e;
  }

  deps.forEach(function(d) {
    walk(d, []);
  });

  var sorted = entries.sort(function(a, b) {
    return a.deps.length > b.deps.length;
  });

  sorted.forEach(function(e) {
    var contents = fs.readFileSync(e.id, 'utf-8');

    contents = contents.replace(/module\.exports\s*=[^;]+;/g, '');
    contents = contents.replace(/var\s+[^\s]+\s*=\s*require\('([^']+)'\);?/g, '');

    out.push(contents);
  });

  out.push('return {');

  libExports.forEach(function(e) {
    out.push(e + ': ' + e + ',');
  });

  out.push('};');

  out.push(fs.readFileSync(__dirname + '/templates/footer.js', 'utf-8'));

  fs.writeFileSync(output, out.join('\n'));

});