import {
  create,
  appendTo,
  append
} from 'tiny-svg';

import {
  createContainer
} from '../helper.js';


describe('create', function() {

  it('should create SVGElement', function() {

    // when
    var svg = create('svg');

    // then
    expect(svg).to.exist;
  });


  it('should create + append SVGElement', function() {

    // given
    var container = createContainer();

    // when
    var svg = appendTo(create('svg', { viewBox: '100 100 200 200', width: 200, height: 200 }), container);

    // then
    expect(svg).to.exist;
  });


  it('should create <svg> from markup', function() {

    // given
    var container = createContainer();

    // when
    var svg = create('<svg><g><circle cx="10" cy="10" r="2"></circle></g></svg>');

    append(container, svg);

    // then
    expect(svg.nodeName).to.eql('svg');
    expect(svg.childNodes.length).to.eql(1);
    expect(svg.childNodes[0].nodeName).to.eql('g');
  });


  it('should create <g> from markup', function() {

    // given
    var container = createContainer();

    // when
    var g = create('<g id="G"><circle cx="10" cy="10" r="2"></circle></g>');

    append(container, g);

    // then
    expect(g.nodeName).to.eql('g');
    expect(g.id).to.eql('G');
    expect(g.childNodes.length).to.eql(1);
    expect(g.childNodes[0].nodeName).to.eql('circle');
  });

});