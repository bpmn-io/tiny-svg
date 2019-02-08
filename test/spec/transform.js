import {
  create,
  createMatrix as matrix,
  createTransform,
  attr,
  transform
} from '../../lib';

import {
  normalizeAttr
} from '../helper';


describe('transform', function() {

  it('should apply matrix', function() {

    // given
    var g = create('g');

    // when
    transform(g, matrix({ e: 100, f: 100 }));

    // then
    expect(normalizeAttr(attr(g, 'transform'))).to.eql('matrix(1 0 0 1 100 100)');
  });


  it('should apply translate', function() {

    // given
    var g = create('g');

    // when
    transform(g, translate(100, 100));

    // then
    expect(normalizeAttr(attr(g, 'transform'))).to.eql('matrix(1 0 0 1 100 100)');
  });


  it('should create and set transform form matrix', function() {

    // given
    var g = create('g');

    // when
    transform(g, matrix({ e: 100, f: 100 }));

    // then
    expect(normalizeAttr(attr(g, 'transform'))).to.eql('matrix(1 0 0 1 100 100)');
  });


  it('should set multiple transforms', function() {

    // given
    var g = create('g');

    // when
    transform(g, [
      matrix({ e: -50, f: -80 }),
      matrix({ e: 100, f: 100 }),
      translate(100, 100)
    ]);

    // then
    expect(normalizeAttr(attr(g, 'transform'))).to.eql('matrix(1 0 0 1 150 120)');
  });

});


// helpers //////////////////

function translate(x, y) {
  var t = createTransform();

  t.setTranslate(x, y);

  return t;
}