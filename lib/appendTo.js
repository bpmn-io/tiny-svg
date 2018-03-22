/**
 * appendTo utility
 */

import ensureImported from './util/ensureImported';

/**
 * Append a node to a target element and return the appended node.
 *
 * @param  {SVGElement} element
 * @param  {SVGElement} node
 *
 * @return {SVGElement} the appended node
 */
export default function appendTo(element, target) {
  target.appendChild(ensureImported(element, target));
  return element;
}