var create = require('../../lib/create'),
    appendTo = require('../../lib/appendTo'),
    innerSVG = require('../../lib/innerSVG');

var helper = require('../helper');


describe('inner-svg', function() {

  describe('set', function() {

    it('should set simple', function() {

      // given
      var container = helper.createContainer();
      var element = appendTo(create('svg'), container);

      var text = '<g class="foo bar"><rect x="0" y="0" width="0" height="0" rx="50" ry="50"/></g>';

      // when
      innerSVG(element, text);

      // then
      expect(element.childNodes.length).to.eql(1);
    });


    it('should set CDATA', function() {

      // given
      var container = helper.createContainer();
      var element = appendTo(create('svg'), container);

      var text =
        '<defs>' +
          '<style type="text/css"><![CDATA[' +
            '.foo { stroke: #ffffff; }' +
          ']]></style>' +
        '</defs>';

      // when
      innerSVG(element, text);

      // then
      expect(element.childNodes.length).to.eql(1);
    });

  });


  describe('get', function() {

    it('should get simple', function() {

      // given
      var container = helper.createContainer();
      var element = appendTo(create('svg'), container);

      var text = '<g class="foo bar"><rect x="0" y="0" width="0" height="0" rx="50" ry="50"/></g>';

      innerSVG(element, text);

      // when
      var svg = innerSVG(element);

      // then
      expect(svg).to.eql(text);
    });


    it('should get CDATA', function() {

      // given
      var container = helper.createContainer();
      var element = appendTo(create('svg'), container);

      var text =
        '<defs>' +
          '<script><![CDATA[]]></script>' +
        '</defs>';

      innerSVG(element, text);

      // when
      var svg = innerSVG(element);

      // then
      expect(svg).to.eql(text);
    });


    it('should get CDATA <style>', function() {

      // given
      var container = helper.createContainer();
      var element = appendTo(create('svg'), container);

      var text =
        '<defs>' +
          '<style type="text/css"><![CDATA[' +
            '.foo { stroke: #ffffff; }' +
          ']]></style>' +
        '</defs>';

      innerSVG(element, text);

      // when
      var svg = innerSVG(element);

      // then
      expect(svg).to.eql(text);
    });

  });

});