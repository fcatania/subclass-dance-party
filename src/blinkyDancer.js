var blinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

blinkyDancer.prototype = Object.create(Dancer.prototype);
blinkyDancer.prototype.constructor = blinkyDancer;

blinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
  this.setPosition();
};

blinkyDancer.prototype.lineup = function() {
  clearTimeout(this.currentTimeout);
  this.timeBetweenSteps = 500;
  this.$node.show();
  this.left = $('body').width() - 30;
  this.setPosition();
  this.step();
};
