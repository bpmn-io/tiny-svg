'use strict';

var attr = require('./attr'),
    svgns = require('./ns').svg;


module.exports = function(type, attrs) {

  var element = document.createElementNS(svgns, type);

  if (attrs) {
    attr(element, attrs);
  }

  return element;
};