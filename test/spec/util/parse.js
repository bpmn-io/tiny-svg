import {
  innerSVG
} from 'tiny-svg';

import parse from '../../../lib/util/parse.js';

import { expect } from 'chai';


describe('parse', function() {

  it('should parse <defs> / CDATA', function() {

    // given
    var text =
      '<defs>' +
        '<style type="text/css"><![CDATA[' +
          '.foo { stroke: #ffffff; }' +
        ']]></style>' +
      '</defs>';

    // when
    var fragment = parse(text);
    var svg = innerSVG(fragment);

    // then
    expect(svg).to.eql(text);
  });


  it('should parse <svg>', function() {

    // given
    var text = '<svg><g id="1"/><circle/></svg>';

    // when
    var doc = parse(text);
    var svg = innerSVG(doc);

    // then
    expect(svg).to.eql('<svg xmlns="http://www.w3.org/2000/svg"><g id="1"/><circle/></svg>');
  });

});
