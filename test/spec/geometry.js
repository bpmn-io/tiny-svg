import {
  createMatrix,
  createPoint,
  createTransform
} from '../../lib';


describe('geometry', function() {

  describe('createPoint', function() {

    it('should create point', function() {

      // when
      var p = createPoint();

      // then
      expect(p instanceof SVGPoint).to.be.true;

      expect(p.x).to.eql(0);
      expect(p.y).to.eql(0);
    });


    it('should create point from (x, y)', function() {

      // when
      var p = createPoint(10, 20);

      // then
      expect(p.x).to.eql(10);
      expect(p.y).to.eql(20);
    });


    it('should create point from Object{x, y}', function() {

      // when
      var p = createPoint({ x: 10, y: 20 });

      // then
      expect(p.x).to.eql(10);
      expect(p.y).to.eql(20);
    });

  });


  describe('createMatrix', function() {

    it('should create matrix', function() {

      // when
      var m = createMatrix({ e: 10, f: 20 });

      // then
      expect(m instanceof SVGMatrix).to.be.true;

      expect(m.e).to.eql(10);
      expect(m.f).to.eql(20);
    });

  });


  describe('createTransform', function() {

    it('should create transform', function() {

      // then
      expect(createTransform).to.exist;
    });

  });

});