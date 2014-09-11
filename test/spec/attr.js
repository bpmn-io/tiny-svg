'use strict';

var create = require('../../lib/create'),
    attr = require('../../lib/attr');

var helper = require('../helper');


describe('attr', function() {

  it('should get attribute', function() {

    // given
    var svg = create('svg');

    // when
    var viewbox = attr(svg, 'viewBox');

    // then
    expect(viewbox).to.not.exist;
  });


  it('should get css', function() {

    // given
    var svg = create('svg');

    // when
    var width = attr(svg, 'width');

    // then
    expect(width).to.not.exist;
  });


  it('should set attribute', function() {

    // given
    var svg = create('svg');

    // when
    attr(svg, 'viewBox', '100 100 200 200');

    // then
    expect(attr(svg, 'viewBox')).to.eql('100 100 200 200');
  });


  it('should set css attribute', function() {

    // given
    var svg = create('svg');

    // when
    attr(svg, 'width', '100px');

    // then
    expect(attr(svg, 'width')).to.eql('100px');
  });


  it('should set attribute', function() {

    // given
    var svg = create('svg');

    // when
    attr(svg, 'viewBox', '100 100 200 200');

    // then
    expect(attr(svg, 'viewBox')).to.eql('100 100 200 200');
  });

});