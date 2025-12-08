import {
  create,
  appendTo
} from 'tiny-svg';

import {
  createContainer
} from '../helper.js';

import { expect } from 'chai';


describe('appendTo', function() {

  it('should append + return node', function() {

    // given
    var container = createContainer();
    var svg = create('svg');

    // when
    var result = appendTo(svg, container);

    // then
    expect(result).to.equal(svg);

    expect(result.parentNode).to.eql(container);
  });

});
