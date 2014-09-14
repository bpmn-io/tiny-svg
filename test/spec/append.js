var create = require('../../lib/create'),
    append = require('../../lib/append');

var helper = require('../helper');


describe('append', function() {

  it('should append + return parent', function() {

    // given
    var container = helper.createContainer(),
        svg = create('svg');

    // when
    var result = append(container, svg);

    // then
    expect(result).to.exist;
    expect(result.nodeName.toLowerCase()).to.eql('div');

    expect(svg.parentNode).to.eql(result);
  });

});