import {
  create,
  appendTo
} from '../../lib';

import {
  createContainer
} from '../helper';


describe('appendTo', function() {

  it('should append + return node', function() {

    // given
    var container = createContainer();

    // when
    var result = appendTo(create('svg'), container);

    // then
    expect(result).to.exist;
    expect(result.nodeName).to.eql('svg');

    expect(result.parentNode).to.eql(container);
  });

});
