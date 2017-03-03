// Created by Danielle Teska and Lulu Xiao
// Last edited Thursday, March 2, 2017
// This creates the bubble popping page. 

var bubbles = [];
var totalBubbles = 100;

function setup() {
  createCanvas(1200, 700);
  for (var i = 0; i < totalBubbles; i++) {
    bubbles.push(new Jitter({
      popped: false,
    }));
  }
}

function draw() {
  background(230); // This makes the background gray like the others. 
  secretMessage(); // This calls the secret message function. 
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
  bubbles.forEach(function(bubble) {
    if (bubble.popped) {
      textSize(24);
      textAlign(CENTER);
      fill('rgba(255,525,255,' + bubble.textOpacity + ')');
      text('**pop**', bubble.x, bubble.y - bubble.offset);

      if (bubble.textOpacity > 0.01) {
        bubble.textOpacity -= 0.01;
      } else {
        bubble.textOpacity = 0;
      }

    } else {
     Jitter(bubble);
    }
  });
}

function wasClickInsideBubble(bubble) {
  var bubbleRadius = bubble.diameter / 2;

  if (
    (mouseX > bubble.x - bubbleRadius) && (mouseX < bubble.x + bubbleRadius) &&
    (mouseY > bubble.y - bubble.offset - bubbleRadius) && (mouseY < bubble.y - bubble.offset + bubbleRadius)
  ) {
    return true;
  } else {
    return false;
  }
}

function mouseClicked() {
  bubbles.forEach(function(bubble) {
    if (wasClickInsideBubble(bubble)) {
      bubble.popped = true;
      console.log('popped!');
    }
  });
}

// function drawBubble(bubble) {
//   if (bubble.offset > height + 400) {
//     bubble.offset = 0;
//   }
// }

// This makes the moving bubbles. 
function Jitter(bubble) {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(300, 300);
  this.speed = 1;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };
  this.display = function() {
    stroke(230);
    fill(71, 130, 158, 0.5 * 255);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}


// This displays the secret message on the screen. Since the message will always in the middle of the
// page, I made the position half the width and height of the defined canvas. 
function secretMessage() {
  textSize(40);
  fill(0, 102, 153);
  textStyle(BOLD);
  textAlign(CENTER);
  text("You are a rockstar!!!", width / 2, height / 2);
}
