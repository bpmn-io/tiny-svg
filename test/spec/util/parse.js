var parse = require('../../../lib/parse'),
    innerSVG = require('../../../lib/innerSVG');


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
    var doc = parse(text);
    var svg = innerSVG(doc.documentElement);

    // then
    expect(svg).to.eql(text);
  });

});