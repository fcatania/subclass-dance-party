//ES6 Version Below

class HorizontalDancer extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.borderColor = 'green';
    this.isMovingRight = true;
    this.$node = $('<img class="bigImage" src="moonwalking.gif"></img>');
    this.setPosition();
  }
  step() {
    super.step();
  
    if (this.isMovingRight) {
      this.left += 15;
      if (this.left >= $('body').width() - 200) {
        this.isMovingRight = false;
        $(this.$node).addClass('flipped');
      }
    } else {
      this.left -= 15;
      if (this.left <= -150) {
        this.isMovingRight = true;
        $(this.$node).removeClass('flipped');
      }
    }
  
    this.setPosition();
  }
  lineup () {
    clearTimeout(this.currentTimeout);
    this.left = 30;
    $(this.$node).removeClass('flipped');
    this.timeBetweenSteps = 100;
    this.isMovingRight = true;
    this.setPosition();
    this.step();
  }
}

window.HorizontalDancer = HorizontalDancer;



//ES5 Version Below

// var HorizontalDancer = function(top, left, timeBetweenSteps) {
//   Dancer.call(this, top, left, timeBetweenSteps);
//   this.borderColor = 'green';
//   this.isMovingRight = true;
//   this.setPosition();
// };

// HorizontalDancer.prototype = Object.create(Dancer.prototype);
// HorizontalDancer.prototype.constructor = HorizontalDancer;

// HorizontalDancer.prototype.step = function() {
//   Dancer.prototype.step.call(this);

//   if (this.isMovingRight) {
//     this.left += 15;
//     if (this.left >= $('body').width()) {
//       this.isMovingRight = false;
//     }
//   } else {
//     this.left -= 15;
//     if (this.left <= 0) {
//       this.isMovingRight = true;
//     }
//   }

//   this.setPosition();
// };

// HorizontalDancer.prototype.lineup = function() {
//   clearTimeout(this.currentTimeout);
//   this.left = 30;
//   this.timeBetweenSteps = 500;
//   this.isMovingRight = true;
//   this.setPosition();
//   this.step();
// };