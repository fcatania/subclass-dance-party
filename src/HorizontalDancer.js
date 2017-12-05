var HorizontalDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.borderColor = 'green';
  this.isMovingRight = true;
  this.setPosition();
};

HorizontalDancer.prototype = Object.create(Dancer.prototype);
HorizontalDancer.prototype.constructor = HorizontalDancer;

HorizontalDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  if (this.isMovingRight) {
    this.left += 15;
    if (this.left >= $('body').width()) {
      this.isMovingRight = false;
    }
  } else {
    this.left -= 15;
    if (this.left <= 0) {
      this.isMovingRight = true;
    }
  }

  this.setPosition();
};

HorizontalDancer.prototype.lineup = function() {
  clearTimeout(this.currentTimeout);
  this.left = 30;
  this.timeBetweenSteps = 500;
  this.isMovingRight = true;
  this.setPosition();
  this.step();
};