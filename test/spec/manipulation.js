'use strict';

var create = require('../../lib/create'),
    append = require('../../lib/manipulation').append;

var helper = require('../helper');


describe('manipulation', function() {

  describe('append', function() {

    it('should append + return element', function() {

      // given
      var container = helper.createContainer();

      // when
      var svg = append(create('svg'), container);

      // then
      expect(svg).to.exist;
      expect(svg.nodeName).to.eql('svg');
    });

  });

});