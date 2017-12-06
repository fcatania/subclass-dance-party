//ES6 Version Below
class VerticalDancer extends Dancer {
  constructor (top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.borderColor = 'blue';
    this.isMovingUp = true;
    this.$node = $('<img class="bigImage" src="leftshark-dancer.gif"></img>');
    this.setPosition();
  }

  step () {
    super.step();

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
  }

  lineup () {
    clearTimeout(this.currentTimeout);
    this.top = $('body').height() - 30;
    this.timeBetweenSteps = 500;
    this.isMovingUp = true;
    this.setPosition();
    this.step();
  }
}

window.VerticalDancer = VerticalDancer;











//ES5 Version Below

// var VerticalDancer = function(top, left, timeBetweenSteps) {
//   Dancer.call(this, top, left, timeBetweenSteps);
//   this.borderColor = 'blue';
//   this.isMovingUp = true;
//   this.setPosition();
// };

// VerticalDancer.prototype = Object.create(Dancer.prototype);
// VerticalDancer.prototype.constructor = VerticalDancer;

// VerticalDancer.prototype.step = function() {
//   Dancer.prototype.step.call(this);

//   if (this.isMovingUp) {
//     this.top -= 15;
//     if (this.top <= 0) {
//       this.isMovingUp = false;
//     }
//   } else {
//     this.top += 15;
//     if (this.top >= $('body').height()) {
//       this.isMovingUp = true;
//     }
//   }

//   this.setPosition();
// };

// VerticalDancer.prototype.lineup = function() {
//   clearTimeout(this.currentTimeout);
//   this.top = $('body').height() - 30;
//   this.timeBetweenSteps = 500;
//   this.isMovingUp = true;
//   this.setPosition();
//   this.step();
// };
