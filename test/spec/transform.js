import {
  create,
  createMatrix,
  createTransform,
  attr,
  transform
} from '../../lib';

import {
  normalizeAttr
} from '../helper';


describe('transform', function() {

  it('should create and set transform', function() {

    // given
    var matrix = createMatrix({ e: 100, f: 100 }),
        g = create('g');

    // when
    var t = createTransform(matrix);

    transform(g, t);

    // then
    expect(normalizeAttr(attr(g, 'transform'))).to.eql('matrix(1 0 0 1 100 100)');
  });


  it('should create and set transform form matrix', function() {

    // given
    var matrix = createMatrix({ e: 100, f: 100 }),
        g = create('g');

    // when
    transform(g, matrix);

    // then
    expect(normalizeAttr(attr(g, 'transform'))).to.eql('matrix(1 0 0 1 100 100)');
  });


  it('should set multiple transforms', function() {

    // given
    var g = create('g');

    var m1 = createMatrix({ e: -50, f: -80 }),
        m2 = createMatrix({ e: 100, f: 100 }),
        t = createTransform();

    t.setTranslate(100, 100);

    // when
    transform(g, [ m1, m2, t ]);

    // then
    expect(normalizeAttr(attr(g, 'transform'))).to.eql('matrix(1 0 0 1 150 120)');
  });

});