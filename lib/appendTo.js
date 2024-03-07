/**
 * appendTo utility
 */

import ensureImported from './util/ensureImported.js';

/**
 * Append a node to a target element and return the appended node.
 *
 * @param  {SVGElement} element
 * @param  {SVGElement} target
 *
 * @return {SVGElement} the appended node
 */
export default function appendTo(element, target) {
  return target.appendChild(ensureImported(element, target));
}