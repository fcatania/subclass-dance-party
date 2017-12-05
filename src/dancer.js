var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.borderColor = 'red';
  this.currentTimeout;
  this.step();
  this.setPosition();
  this.assignMouseOver();
};

Dancer.prototype.step = function() {
  this.currentTimeout = setTimeout(() => { this.step() }, this.timeBetweenSteps);
  //this.currentTimeout = setTimeout(this.step.bind(this), this.timeBetweenSteps);
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

Dancer.prototype.assignMouseOver = function() {
  var oldColor = this.borderColor;
  this.$node.mouseover(function(event) {
    // this.borderColor = 'yellow';
    var styleSettings = {
      'border-color': 'yellow'
    };
    $(this).css(styleSettings);
  });

  // this.$node.mouseexit(function(event) {
  //   this.borderColor = oldColor;
  // });

};


