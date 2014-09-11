'use strict';

var create = require('../../lib/create'),
    append = require('../../lib/manipulation').append;

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
    var svg = append(create('svg', { viewBox: '100 100 200 200', width: '200px', height: '200px' }), container);

    // then
    expect(svg).to.exist;
  });

});