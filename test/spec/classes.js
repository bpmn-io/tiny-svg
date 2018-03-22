import {
  create,
  classes
} from '../../lib';


function classList(el) {
  return el.className.baseVal.split(' ');
}


describe('classes', function() {

  it('should add a class', function() {

    // given
    var rect = create('rect');

    // when
    classes(rect).add('foo');

    // then
    expect(classList(rect)).to.contain('foo');

  });


  it('should remove a class', function() {

    // given
    var rect = create('rect');
    classes(rect).add('foo');

    // when
    classes(rect).remove('foo');

    // then
    expect(classList(rect)).not.to.contain('foo');

  });


  it('should toggle a class', function() {

    // given
    var rect = create('rect');

    // when
    classes(rect).toggle('foo');

    // then
    expect(classList(rect)).to.contain('foo');

    // when
    classes(rect).toggle('foo');

    // then
    expect(classList(rect)).not.to.contain('foo');

  });


  it('should check for class \'has\'', function() {

    // given
    var rect = create('rect');
    classes(rect).add('foo');

    // then
    expect(classes(rect).has('foo')).to.be.true;

    // when
    classes(rect).remove('foo');

    // then
    expect(classes(rect).has('foo')).not.to.be.true;

  });


  it('should check for class \'contains\'', function() {

    // given
    var rect = create('rect');
    classes(rect).add('foo');

    // then
    expect(classes(rect).contains('foo')).to.be.true;

    // when
    classes(rect).remove('foo');

    // then
    expect(classes(rect).contains('foo')).not.to.be.true;

  });

});
