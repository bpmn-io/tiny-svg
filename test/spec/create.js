var create = require('../../lib/create'),
    appendTo = require('../../lib/appendTo'),
    append = require('../../lib/append');

var helper = require('../helper');


describe('create', function() {

  it('should create SVGElement', function() {

    // when
    var svg = create('svg');

    // then
    expect(svg).to.exist;
  });


  it('should create + append SVGElement', function() {

    // given
    var container = helper.createContainer();

    // when
    var svg = appendTo(create('svg', { viewBox: '100 100 200 200', width: 200, height: 200 }), container);

    // then
    expect(svg).to.exist;
  });


  it('should create element from SVG markup', function() {

    // given
    var container = helper.createContainer();

    // when
    var svg = create('<svg><g><circle cx="10" cy="10" r="2"></circle></g></svg>');

    append(container, svg);

    // then
    expect(svg.nodeName).to.eql('svg');
    expect(svg.childNodes.length).to.eql(1);
    expect(svg.childNodes[0].nodeName).to.eql('g');
  });

});