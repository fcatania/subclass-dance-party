var VerticalDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.isMovingUp = true;
};

VerticalDancer.prototype = Object.create(Dancer.prototype);
VerticalDancer.prototype.constructor = VerticalDancer;

VerticalDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // this.$node.toggle();
  //Specific move for Vertical Dancer
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

  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};