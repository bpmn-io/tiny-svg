import {
  create,
  clear,
  select
} from 'tiny-svg';

import { expect } from 'chai';


describe('clear', function() {

  it('should clear <svg />', function() {

    // given
    var svg = create(`
      <svg>
        <defs>
          <circle id="myCircle" cx="0" cy="0" r="5" />

          <linearGradient id="myGradient" gradientTransform="rotate(90)">
            <stop offset="20%" stop-color="gold" />
            <stop offset="90%" stop-color="red" />
          </linearGradient>
        </defs>

        <use x="5" y="5" href="#myCircle" fill="url('#myGradient')" />

        <rect x="10" y="10" width="20" height="20"></rect>
        <rect x="20" y="20" width="20" height="20"></rect>
        <rect x="30" y="30" width="20" height="20"></rect>
        <rect x="40" y="40" width="20" height="20"></rect>
      </svg>
    `);

    // when
    var result = clear(svg);

    // then
    expect(result).to.equal(svg);
    expect(result.childNodes.length).to.eql(0);
  });


  it('should clear <g />', function() {

    // given
    var svg = create(`
      <svg>
        <g>
          <rect x="10" y="10" width="20" height="20"></rect>
          <rect x="20" y="20" width="20" height="20"></rect>
          <rect x="30" y="30" width="20" height="20"></rect>
          <rect x="40" y="40" width="20" height="20"></rect>
        </g>
      </svg>
    `);

    var g = select(svg, 'g');

    // when
    var result = clear(g);

    // then
    expect(result).to.equal(g);
    expect(result.childNodes.length).to.eql(0);
  });

});
