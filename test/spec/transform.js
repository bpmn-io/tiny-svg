var create = require('../../lib/create'),
    geometry = require('../../lib/geometry'),
    attr = require('../../lib/attr'),
    transform = require('../../lib/transform');


var normalizeAttr = require('../helper').normalizeAttr;


describe('transform', function() {

  it('should create and set transform', function() {

    // given
    var matrix = geometry.createMatrix({ e: 100, f: 100 }),
        g = create('g');

    // when
    var t = geometry.createTransform(matrix);

    transform(g, t);

    // then
    expect(normalizeAttr(attr(g, 'transform'))).to.eql('matrix(1 0 0 1 100 100)');
  });


  it('should create and set transform form matrix', function() {

    // given
    var matrix = geometry.createMatrix({ e: 100, f: 100 }),
        g = create('g');

    // when
    transform(g, matrix);

    // then
    expect(normalizeAttr(attr(g, 'transform'))).to.eql('matrix(1 0 0 1 100 100)');
  });


  it('should set multiple transforms', function() {

    // given
    var g = create('g');

    var m1 = geometry.createMatrix({ e: -50, f: -80 }),
        m2 = geometry.createMatrix({ e: 100, f: 100 }),
        t = geometry.createTransform();

    t.setTranslate(100, 100);

    // when
    transform(g, [ m1, m2, t ]);

    // then
    expect(normalizeAttr(attr(g, 'transform'))).to.eql('matrix(1 0 0 1 150 120)');
  });

});