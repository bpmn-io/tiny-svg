/**
 * Clear utility
 */

import remove from './remove.js';

/**
 * Removes all children from the given element
 *
 * @param  {DOMElement} element
 * @return {DOMElement} the element (for chaining)
 */
export default function clear(element) {
  var child;

  while ((child = element.firstChild)) {
    remove(child);
  }

  return element;
}