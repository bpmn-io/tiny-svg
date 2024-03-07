/**
 * append utility
 */

import appendTo from './appendTo.js';

/**
 * Append a node to an element
 *
 * @param  {SVGElement} element
 * @param  {SVGElement} node
 *
 * @return {SVGElement} the element
 */
export default function append(target, node) {
  appendTo(node, target);
  return target;
}