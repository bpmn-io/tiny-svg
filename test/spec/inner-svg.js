'use strict';

var create = require('../../lib/create'),
    append = require('../../lib/manipulation').append,
    innerSVG = require('../../lib/inner-svg');

var helper = require('../helper');


describe('inner-svg', function() {

  it('should set on SVGElement', function() {

    // given
    var container = helper.createContainer();
    var svg = append(create('svg'), container);

    // when
    innerSVG(svg, '<g class="foo bar"><rect x="0" y="0" width="0" height="0" rx="50" ry="50" /></g>');

    // then
    expect(svg.childNodes.length).to.eql(1);
  });

});