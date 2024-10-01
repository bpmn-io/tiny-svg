import {
  create,
  appendTo,
  innerSVG,
  attr
} from 'tiny-svg';

import {
  createContainer
} from '../helper.js';


describe('inner-svg', function() {

  describe('set', function() {

    it('should set simple', function() {

      // given
      var container = createContainer();
      var element = appendTo(create('svg'), container);

      var text = '<g class="foo bar"><rect x="0" y="0" width="0" height="0" rx="50" ry="50"/></g>';

      // when
      innerSVG(element, text);

      // then
      expect(element.childNodes.length).to.eql(1);
    });


    it('should set CDATA', function() {

      // given
      var container = createContainer();
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


    it('should set url style', function() {

      // given
      var container = createContainer();
      var element = appendTo(create('svg'), container);

      var text = '<g style="marker-start: url(\'#foo\')"></g>';

      // when
      innerSVG(element, text);

      var groupNode = element.childNodes[0];

      // then
      // Chrome, Firefox export url enclosed in <"">
      expect(groupNode.style['marker-start']).to.match(/url\((#foo|"#foo")\)/);
    });


    it('should set from SVG', function() {

      // given
      var container = createContainer();
      var element = appendTo(create('svg'), container);

      var text =
        '<svg>' +
          '<g id="G"/>' +
          '<g id="G2"/>' +
        '</svg>';

      // when
      innerSVG(element, text);

      // then
      expect(element.childNodes.length).to.eql(2);
    });


    it('should set fragment', function() {

      // given
      var container = createContainer();
      var element = appendTo(create('svg'), container);

      var text =
        '<g id="G"/>' +
        '<g id="G2"/>';

      // when
      innerSVG(element, text);

      // then
      expect(element.childNodes.length).to.eql(2);
    });

  });


  describe('get', function() {

    it('should get simple', function() {

      // given
      var container = createContainer();
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
      var container = createContainer();
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


    it('should get url style', function() {

      // given
      var container = createContainer();
      var element = appendTo(create('svg'), container);

      var group = appendTo(create('g'), element);
      var path = appendTo(create('path'), group);

      attr(path, {
        d: 'm 272,202L340,202',
        markerEnd: 'url("#sequenceflow-end")'
      });

      // when
      var svg = innerSVG(element);

      // then
      // Chrome, Firefox export url enclosed in <"">,
      // we need to properly escape <"> with <'> to produce
      // valid SVG
      expect(svg).to.match(/.*url\(('#sequenceflow-end'|#sequenceflow-end)\).*/);
    });


    it('should get CDATA <style>', function() {

      // given
      var container = createContainer();
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


    it('should get fragment', function() {

      // given
      var container = createContainer();
      var element = appendTo(create('svg'), container);

      var text =
        '<g id="G"/>' +
        '<g id="G2"/>';

      innerSVG(element, text);

      // when
      var svg = innerSVG(element);

      // then
      expect(svg).to.eql(text);
    });


    it('should escape <> in attributes', function() {

      // given
      var container = createContainer();
      var element = appendTo(create('svg'), container);

      var text = '<g><rect data-foo="1 &lt;&gt; 2"/></g>';

      innerSVG(element, text);

      // when
      var svg = innerSVG(element);

      // then
      expect(svg).to.eql(text);
    });


    it('should escape & in attributes', function() {

      // given
      var container = createContainer();
      var element = appendTo(create('svg'), container);

      var text = '<g><rect data-foo="1 &amp; 2"/></g>';

      innerSVG(element, text);

      // when
      var svg = innerSVG(element);

      // then
      expect(svg).to.eql(text);
    });
  });

});