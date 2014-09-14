var create = require('../../lib/create'),
    appendTo = require('../../lib/appendTo');

var helper = require('../helper');


describe('appendTo', function() {

  it('should append + return node', function() {

    // given
    var container = helper.createContainer();

    // when
    var result = appendTo(create('svg'), container);

    // then
    expect(result).to.exist;
    expect(result.nodeName).to.eql('svg');

    expect(result.parentNode).to.eql(container);
  });

});
