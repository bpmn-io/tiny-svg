import {
  create,
  append
} from '../../lib';

import {
  createContainer
} from '../helper';


describe('append', function() {

  it('should append + return parent', function() {

    // given
    var container = createContainer(),
        svg = create('svg');

    // when
    var result = append(container, svg);

    // then
    expect(result).to.equal(container);

    expect(svg.parentNode).to.eql(result);
  });

});