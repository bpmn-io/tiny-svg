'use strict';

function select(node, selector) {
  return node.querySelector(selector);
}

function selectAll(node, selector) {
  var i,
      results = [],
      nodes = node.querySelectorAll(selector);

  return [].map.call(nodes, function(element) {
    return element;
  });
}

module.exports = {
  select: select,
  selectAll: selectAll
};
