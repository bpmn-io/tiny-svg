import {
  create,
  appendTo,
  remove
} from 'tiny-svg';

import {
  createContainer
} from '../helper.js';


describe('remove', function() {

  it('should remove + return parent', function() {

    // given
    var container = createContainer(),
        svg = create('<svg><rect x="100" y="100" width="20" height="20"></rect></svg>');

    // when
    var result = remove(appendTo(svg, container));

    // then
    expect(result).to.equal(svg);
    expect(result.nodeName).to.eql('svg');

    expect(result.parentNode).not.to.exist;
  });

});
