/**
 * append utility
 */

import appendTo from './appendTo';

/**
 * Append a node to an element
 *
 * @param  {SVGElement} element
 * @param  {SVGElement} node
 *
 * @return {SVGElement} the element
 */
export default function append(element, node) {
  appendTo(node, element);
  return element;
}