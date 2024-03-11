import {
  create,
  selectAll,
  select
} from 'tiny-svg';


describe('query', function() {

  // given
  var svg = create('<svg><g class="group1"></g><g class="group2"><rect></rect></g></svg>');


  describe('select', function() {

    it('should select single', function() {

      // when
      var group1 = select(svg, '.group1');

      // then
      expect(group1).to.exist;
      expect(group1.nodeName).to.eql('g');
    });


    it('should select many', function() {

      // when
      var groups = selectAll(svg, 'g');

      // then
      expect(groups).to.exist;
      expect(groups.length).to.eql(2);
    });

  });

});