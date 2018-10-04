import {
  create,
  prepend
} from '../../lib';


describe('prepend', function() {

  it('should prepend + return parent', function() {

    // given
    var svg = create('<svg><g></g></svg>'),
        g = create('<g id="G" />');

    // when
    var result = prepend(svg, g);

    // then
    expect(result).to.exist;

    expect(svg.childNodes).to.have.length(2);
    expect(svg.firstChild).to.equal(g);
  });

});