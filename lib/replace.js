/**
 * Replace utility
 */

module.exports = replace;

var ensureImported = require('./util/ensureImported');

function replace(element, replacement) {
  element.parentNode.replaceChild(ensureImported(replacement, element), element);
  return replacement;
}