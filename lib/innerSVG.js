/**
 * innerHTML like functionality for SVG elements.
 * based on innerSVG (https://code.google.com/p/innersvg)
 */

module.exports = innerSVG;


var clear = require('./clear');
var appendTo = require('./appendTo');
var parse = require('./util/parse');
var serialize = require('./util/serialize');


function set(element, svg) {

  var node,
      documentElement = parse(svg).documentElement;

  // clear element contents
  clear(element);

  if (!svg) {
    return;
  }

  // import + append each node
  node = documentElement.firstChild;

  while (node) {
    appendTo(node, element);
    node = node.nextSibling;
  }
}

function get(element) {
  var child = element.firstChild,
      output = [];

  while (child) {
    serialize(child, output);
    child = child.nextSibling;
  }

  return output.join('');
}

function innerSVG(element, svg) {

  if (svg !== undefined) {

    try {
      set(element, svg);
    } catch(e) {
      throw new Error('error parsing SVG: ' + e.message);
    }

    return element;
  } else {
    return get(element);
  }
}