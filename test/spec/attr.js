import {
  create,
  select,
  attr
} from 'tiny-svg';

import {
  normalizeAttr
} from '../helper.js';

import { expect } from 'chai';


describe('attr', function() {

  it('should get attribute', function() {

    // given
    var svg = create('svg');

    // when
    var viewbox = attr(svg, 'viewBox');

    // then
    expect(!!viewbox).to.be.false;
  });


  it('should get css', function() {

    // given
    var rect = create('rect');

    // when
    var stroke = attr(rect, 'stroke');

    // then
    expect(!!stroke).to.be.false;
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
    var rect = create('rect');

    // when
    attr(rect, 'stroke-width', '2px');

    // then
    expect(attr(rect, 'stroke-width')).to.eql('2px');
  });


  it('should set marker-start attribute', function() {

    // given
    var rect = create('rect');

    // when
    attr(rect, 'marker-start', 'url("#foo")');

    // then
    // Chrome, Firefox export url enclosed in <"">
    expect(attr(rect, 'marker-start')).to.match(/url\((#foo|"#foo")\)/);
  });


  it('should set markerEnd attribute', function() {

    // given
    var rect = create('rect');

    // when
    attr(rect, 'markerEnd', 'url(#bar)');

    // then
    // Chrome, Firefox export url enclosed in <"">
    expect(attr(rect, 'marker-end')).to.match(/url\((#bar|"#bar")\)/);
  });


  it('should set attribute', function() {

    // given
    var svg = create('svg');

    // when
    attr(svg, 'view-box', '100 100 200 200');

    // then
    expect(attr(svg, 'view-box')).to.eql('100 100 200 200');
  });


  it('should get transform attribute', function() {

    // given
    var svg = create('<svg><g transform="translate(100 100)"></g></svg>'),
        g = select(svg, 'g');

    // when
    var transform = attr(g, 'transform');

    // then
    expect(normalizeAttr(transform)).to.eql('translate(100 100)');
  });

});