/* global TinySVG */

describe('umd bundle', function() {

  var appendTo = TinySVG.appendTo;
  var create = TinySVG.create;
  var innerSVG = TinySVG.innerSVG;

  it('should expose utilities', function() {
    expect(appendTo).to.exist;
    expect(create).to.exist;
    expect(innerSVG).to.exist;
  });


  it('should work', function() {

    // given
    var container = document.createElement('div');
    var element = appendTo(create('svg'), container);

    var text = (
      '<g class="foo bar">' +
        '<rect x="0" y="0" width="0" height="0" rx="50" ry="50"/>' +
      '</g>'
    );

    // when
    innerSVG(element, text);

    // then
    expect(element.childNodes.length).to.eql(1);
  });

});