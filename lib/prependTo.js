/**
 * prependTo utility
 */

import ensureImported from './util/ensureImported.js';

/**
 * Prepend a node to a target element and return the prepended node.
 *
 * @param  {SVGElement} node
 * @param  {SVGElement} target
 *
 * @return {SVGElement} the prepended node
 */
export default function prependTo(node, target) {
  return target.insertBefore(ensureImported(node, target), target.firstChild || null);
}