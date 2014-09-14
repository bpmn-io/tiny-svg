/**
 * Geometry helpers
 */

module.exports = { createPoint: createPoint, createMatrix: createMatrix, createTransform: createTransform };


var create = require('./create');

// fake node used to instantiate svg geometry elements
var node = create('svg');

function extend(object, props) {
  var i, k, keys = Object.keys(props);

  for (i = 0; !!(k = keys[i]); i++) {
    object[k] = props[k];
  }

  return object;
}


function createPoint(x, y) {
  var point = node.createSVGPoint();

  switch (arguments.length) {
    case 0:
      return point;
    case 2:
      x = {
        x: x,
        y: y
      };
      break;
  }

  return extend(point, x);
}

function createMatrix(a, b, c, d, e, f) {
  var matrix = node.createSVGMatrix();

  switch (arguments.length) {
    case 0:
      return matrix;
    case 6:
      a = {
        a: a,
        b: b,
        c: c,
        d: d,
        e: e,
        f: f
      };
      break;
  }

  return extend(matrix, a);
}

function createTransform(matrix) {
  if (matrix) {
    return node.createSVGTransformFromMatrix(matrix);
  } else {
    return node.createSVGTransform();
  }
}