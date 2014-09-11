'use strict';

var CSS_PROPERTIES = {
  'alignment-baseline': 0,
  'baseline-shift': 0,
  'clip': 0,
  'clip-path': 0,
  'clip-rule': 0,
  'color': 0,
  'color-interpolation': 0,
  'color-interpolation-filters': 0,
  'color-profile': 0,
  'color-rendering': 0,
  'cursor': 0,
  'direction': 0,
  'display': 0,
  'dominant-baseline': 0,
  'enable-background': 0,
  'fill': 0,
  'fill-opacity': 0,
  'fill-rule': 0,
  'filter': 0,
  'flood-color': 0,
  'flood-opacity': 0,
  'font': 0,
  'font-family': 0,
  'font-size': 0,
  'font-size-adjust': 0,
  'font-stretch': 0,
  'font-style': 0,
  'font-variant': 0,
  'font-weight': 0,
  'glyph-orientation-horizontal': 0,
  'glyph-orientation-vertical': 0,
  'image-rendering': 0,
  'kerning': 0,
  'letter-spacing': 0,
  'lighting-color': 0,
  'marker': 0,
  'marker-end': 0,
  'marker-mid': 0,
  'marker-start': 0,
  'mask': 0,
  'opacity': 0,
  'overflow': 0,
  'pointer-events': 0,
  'shape-rendering': 0,
  'stop-color': 0,
  'stop-opacity': 0,
  'stroke': 0,
  'stroke-dasharray': 0,
  'stroke-dashoffset': 0,
  'stroke-linecap': 0,
  'stroke-linejoin': 0,
  'stroke-miterlimit': 0,
  'stroke-opacity': 0,
  'stroke-width': 0,
  'text-anchor': 0,
  'text-decoration': 0,
  'text-rendering': 0,
  'unicode-bidi': 0,
  'visibility': 0,
  'word-spacing': 0,
  'writing-mode': 0
};


var has = Object.hasOwnProperty;

function getComputedStyle(node) {
  return node.ownerDocument.defaultView.getComputedStyle(node, null);
}

function getAttribute(node, name) {
  if (CSS_PROPERTIES.hasOwnProperty(name)) {
    return getComputedStyle(node).getPropertyValue(name);
  } else {
    return node.getAttributeNS(null, name);
  }
}

function setAttribute(node, name, value) {
  if (CSS_PROPERTIES.hasOwnProperty(name)) {
    node.style[name] = value;
  } else {
    node.setAttributeNS(null, name, value);
  }
}

function setAttributes(node, attrs) {

  var names = Object.keys(attrs), i, name, value;

  for (i = 0, name; !!(name = names[i]); i++) {
    setAttribute(node, name, attrs[name]);
  }
}

/**
 * Gets or sets attributes on a node.
 *
 * @param  {SVGElement} node
 * @param  {Object} [attrs]
 * @param  {String} [name]
 * @param  {String} [value]
 *
 * @return {String}
 */
module.exports = function(node, name, value) {
  if (typeof name === 'string') {
    if (value !== undefined) {
      setAttribute(node, name, value);
    } else {
      return getAttribute(node, name);
    }
  } else {
    setAttributes(node, name);
  }

  return node;
};