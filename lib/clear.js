/**
 * Clear utility
 */

/**
 * Removes all children from the given element
 *
 * @param  {SVGElement} element
 * @return {Element} the element (for chaining)
 */
export default function clear(element) {
  var child;

  while ((child = element.firstChild)) {
    element.removeChild(child);
  }

  return element;
}