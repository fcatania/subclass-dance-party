//ES6 Version Below

class blinkyDancer extends Dancer {

  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node = $('<img class="smallImage" src="groot-dancing.gif"></img>');
    this.setPosition();
  }


  step () {
    super.step();
    // this.$node.toggle();
    // this.setPosition();
  }

  lineup () {
    clearTimeout(this.currentTimeout);
    this.timeBetweenSteps = 500;
    this.$node.show();
    this.left = $('body').width() - 150;
    this.setPosition();
    this.step();
  }
}

window.blinkyDancer = blinkyDancer;

//ES5 Version Below 

// var blinkyDancer = function(top, left, timeBetweenSteps) {
//   Dancer.call(this, top, left, timeBetweenSteps);
// };

// blinkyDancer.prototype = Object.create(Dancer.prototype);
// blinkyDancer.prototype.constructor = blinkyDancer;

// blinkyDancer.prototype.step = function() {
//   Dancer.prototype.step.call(this);
//   this.$node.toggle();
//   this.setPosition();
// };

// blinkyDancer.prototype.lineup = function() {
//   clearTimeout(this.currentTimeout);
//   this.timeBetweenSteps = 500;
//   this.$node.show();
//   this.left = $('body').width() - 30;
//   this.setPosition();
//   this.step();
// };