var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.borderColor = 'red';
  this.currentTimeout;
  this.step();
  this.setPosition();
};

Dancer.prototype.step = function() {
  this.currentTimeout = setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function() {
  var styleSettings = {
    top: this.top,
    left: this.left,
    'border-color': this.borderColor
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineup = function() {

};
