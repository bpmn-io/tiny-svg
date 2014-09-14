/**
 * DOM parsing utility
 */

module.exports = parse;


var ns = require('./ns');

var SVG_START = '<svg xmlns="' + ns.svg + '"';

function parse(svg) {

  var doc;

  // ensure we import a valid svg document
  if (svg.substring(0, 4) === '<svg') {
    doc = true;

    if (svg.indexOf(ns.svg) === -1) {
      svg = SVG_START + svg.substring(4);
    }
  } else {
    // namespace svg
    svg = SVG_START + '>' + svg + '</svg>';
  }

  return parseDocument(svg);
}

function parseDocument(svg) {

  var parser;

  // parse
  parser = new DOMParser();
  parser.async = false;

  return parser.parseFromString(svg, 'text/xml');
}