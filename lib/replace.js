/**
 * Replace utility
 */

import ensureImported from './util/ensureImported';

export default function replace(element, replacement) {
  element.parentNode.replaceChild(ensureImported(replacement, element), element);
  return replacement;
}