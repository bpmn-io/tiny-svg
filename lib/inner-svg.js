'use strict';

// innerHTML like functionality for SVG elements.
// based on innerSVG (https://code.google.com/p/innersvg)

var clear = require('./manipulation').clear;


function set(element, svg) {

  var parser, node, xml, documentElement;

  // clear element contents
  clear(element);

  // parse
  parser = new DOMParser();
  parser.async = false;

  xml = '<svg xmlns="http://www.w3.org/2000/svg">' + svg + '</svg>';
  documentElement = parser.parseFromString(xml, 'text/xml').documentElement;

  // import + append each node
  node = documentElement.firstChild;

  while (node) {
    element.appendChild(element.ownerDocument.importNode(node, true));
    node = node.nextSibling;
  }
}

function get(element) {
  throw new Error('not implemented');
}

module.exports = function(element, svg) {

  if (svg !== undefined) {

    try {
      set(element, svg);
    } catch(e) {
      throw new Error('Error parsing XML string');
    }

    return element;
  } else {
    return get(element);
  }
};