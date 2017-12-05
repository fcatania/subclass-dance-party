var HorizontalDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.isMovingRight = true;
};

HorizontalDancer.prototype = Object.create(Dancer.prototype);
HorizontalDancer.prototype.constructor = HorizontalDancer;

HorizontalDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // this.$node.toggle();
  //Specific move for Horizontal Dancer
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

  var styleSettings = {
    top: this.top,
    left: this.left
  };

  this.$node.css(styleSettings);
};