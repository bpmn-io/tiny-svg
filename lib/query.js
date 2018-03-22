/**
 * Selection utilities
 */

export function select(node, selector) {
  return node.querySelector(selector);
}

export function selectAll(node, selector) {
  var nodes = node.querySelectorAll(selector);

  return [].map.call(nodes, function(element) {
    return element;
  });
}
