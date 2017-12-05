describe('blinkyDancer', function() {

  var aBlinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    aBlinkyDancer = new blinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(aBlinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(aBlinkyDancer.$node, 'toggle');
    aBlinkyDancer.step();
    expect(aBlinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(aBlinkyDancer, 'step');
      expect(aBlinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(aBlinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(aBlinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe('VerticalDancer', function() {

  var verticalDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    verticalDancer = new VerticalDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(verticalDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a isMovingUp property', function() {
    expect(typeof verticalDancer.isMovingUp).to.be.equal('boolean');
  });

  it('should have a step function that makes its node move', function() {
    sinon.spy(verticalDancer.$node, 'toggle');
    var oldTop = verticalDancer.top;
    verticalDancer.step();
    expect(verticalDancer.top).to.not.equal(oldTop);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(verticalDancer, 'step');
      expect(verticalDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(verticalDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(verticalDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe('HorizontalDancer', function() {

  var horizontalDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    horizontalDancer = new HorizontalDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(horizontalDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a isMovingUp property', function() {
    expect(typeof horizontalDancer.isMovingRight).to.be.equal('boolean');
  });

  it('should have a step function that makes its node move', function() {
    sinon.spy(horizontalDancer.$node, 'toggle');
    var oldLeft = horizontalDancer.left;
    horizontalDancer.step();
    expect(horizontalDancer.left).to.not.equal(oldLeft);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(horizontalDancer, 'step');
      expect(horizontalDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(horizontalDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(horizontalDancer.step.callCount).to.be.equal(2);
    });
  });
});