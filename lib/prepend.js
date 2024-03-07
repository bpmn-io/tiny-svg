/**
 * prepend utility
 */

import prependTo from './prependTo.js';

/**
 * Prepend a node to a target element
 *
 * @param  {SVGElement} target
 * @param  {SVGElement} node
 *
 * @return {SVGElement} the target element
 */
export default function prepend(target, node) {
  prependTo(node, target);
  return target;
}