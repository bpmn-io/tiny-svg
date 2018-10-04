import {
  create,
  prependTo
} from '../../lib';


describe('prependTo', function() {

  it('should prepend + return node', function() {

    // given
    var svg = create('<svg><g></g></svg>');
    var group = create('<g id="G" />');

    // when
    var result = prependTo(group, svg);

    // then
    expect(result).to.equal(group);
    expect(result.parentNode).to.eql(svg);
  });


  it('should prepend as first child', function() {

    // given
    var svg = create('<svg></svg>');
    var group = create('<g id="G" />');

    // when
    var result = prependTo(group, svg);

    // then
    expect(result).to.equal(group);
    expect(result.parentNode).to.eql(svg);

    expect(svg.childNodes).to.have.length(1);
  });

});
