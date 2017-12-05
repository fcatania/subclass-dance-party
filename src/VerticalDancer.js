var VerticalDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.borderColor = 'blue';
  this.isMovingUp = true;
  this.setPosition();
};

VerticalDancer.prototype = Object.create(Dancer.prototype);
VerticalDancer.prototype.constructor = VerticalDancer;

VerticalDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  if (this.isMovingUp) {
    this.top -= 15;
    if (this.top <= 0) {
      this.isMovingUp = false;
    }
  } else {
    this.top += 15;
    if (this.top >= $('body').height()) {
      this.isMovingUp = true;
    }
  }

  this.setPosition();
};

VerticalDancer.prototype.lineup = function() {
  clearTimeout(this.currentTimeout);
  this.top = $('body').height() - 30;
  this.timeBetweenSteps = 500;
  this.isMovingUp = true;
  this.setPosition();
  this.step();
};