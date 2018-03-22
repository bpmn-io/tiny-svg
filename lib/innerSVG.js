/**
 * innerHTML like functionality for SVG elements.
 * based on innerSVG (https://code.google.com/p/innersvg)
 */

import clear from './clear';
import appendTo from './appendTo';
import parse from './util/parse';
import serialize from './util/serialize';


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

export default function innerSVG(element, svg) {

  if (svg !== undefined) {

    try {
      set(element, svg);
    } catch (e) {
      throw new Error('error parsing SVG: ' + e.message);
    }

    return element;
  } else {
    return get(element);
  }
}