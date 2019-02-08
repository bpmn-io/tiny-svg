import {
  create,
  appendTo,
  innerSVG as _innerSVG,
  clone,
  createTransform,
  createMatrix as matrix,
  transform,
  attr as _attr,
  select
} from '../../lib';

import {
  createContainer,
  normalizeAttr
} from '../helper';


describe('clone', function() {

  var container, svg;

  beforeEach(function() {
    container = createContainer();
    svg = appendTo(create('svg'), container);
  });


  it('should clone svg', function() {

    // given
    var text = '<g class="cls" style="display: block;" transform="translate(110 110)" data-element-id="child"><g class="djs-visual"><rect style="fill: white; stroke: fuchsia; stroke-width: 2px;" x="0" y="0" width="100" height="100"/></g><rect class="djs-hit" style="fill: none; stroke: white; stroke-opacity: 0; stroke-width: 15px;" x="0" y="0" width="100" height="100"/><rect class="djs-outline" style="fill: none;" x="-6" y="-6" width="112" height="112"/></g>';

    innerSVG(svg, text);

    // when
    var cloned = clone(svg);

    // then
    expect(innerSVG(cloned)).to.eql(text);
  });


  it('should clone group', function() {

    // given
    var text = '<g class="cls" style="display: block;" transform="translate(110 110)" data-element-id="child"><g class="djs-visual"><rect style="fill: white; stroke: fuchsia; stroke-width: 2px;" x="0" y="0" width="100" height="100"/></g><rect class="djs-hit" style="fill: none; stroke: white; stroke-opacity: 0; stroke-width: 15px;" x="0" y="0" width="100" height="100"/><rect class="djs-outline" style="fill: none;" x="-6" y="-6" width="112" height="112"/></g>';

    innerSVG(svg, text);

    // when
    var g = select(svg, 'g');

    var clonedG = clone(g);

    // then
    expect(innerSVG(clonedG)).to.eql(innerSVG(g));
  });


  it('should clone data-attribute', function() {

    // given
    var g = appendTo(create('g'), svg);

    attr(g, 'data-foo', '1000');

    // when
    var clonedG = clone(g);

    // then
    expect(attr(clonedG, 'data-foo')).to.eql('1000');
  });


  it('should clone transform', function() {

    // given
    var g = appendTo(create('g'), svg);

    transform(g, [
      matrix({ e: -50, f: -80 }),
      matrix({ e: 100, f: 100 }),
      translate(100, 100)
    ]);

    // when
    var clonedG = clone(g);

    // then
    expect(attr(clonedG, 'transform')).to.eql('matrix(1 0 0 1 150 120)');
  });

});


// helpers /////////////////////

function translate(x, y) {
  var t = createTransform();

  t.setTranslate(x, y);

  return t;
}

function innerSVG(el, value) {

  if (arguments.length === 2) {
    return _innerSVG(el, value);
  } else {
    return normalizeAttr(_innerSVG(el));
  }
}


function attr(el, key, value) {
  if (arguments.length === 3) {
    return _attr(el, key, value);
  } else {
    return normalizeAttr(_attr(el, key));
  }
}