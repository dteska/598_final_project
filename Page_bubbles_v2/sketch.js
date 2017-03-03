// Created by Danielle Teska and Lulu Xiao
// Last edited Thursday, March 2, 2017
// This creates the bubble popping page. 

var bubbles = [];
var totalBubbles = 100;

function setup() {
  createCanvas(1200, 700);
  for (var i = 0; i < totalBubbles; i++) {
    bubbles.push({
      x: random(0, width),
      y: window.innerHeight + 200,
      diameter: random(300, 300),
      speed: random(1, 10),
      offset: 0,
      popped: false,
      textOpacity: 1
    });
  }
}

function draw() {
  background(230); // This makes the background gray like the others. 
  secretMessage(); // This calls the secret message function. 
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
      drawBubble(bubble);
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

function drawBubble(bubble) {

  // if (bubble.offset > height + 400) {
  //   bubble.offset = 0;
  // }

  bubble.offset += bubble.speed;
  fill('lightblue');
  stroke('while');
  ellipse(bubble.x, bubble.y - bubble.offset, bubble.diameter, bubble.diameter);

  fill('white');
  ellipse(bubble.x + (bubble.diameter * 0.2), bubble.y - bubble.offset - (bubble.diameter * 0.25), bubble.diameter / 8, bubble.diameter / 8);

  fill('lightblue');
  noStroke();
  ellipse(bubble.x + (bubble.diameter * 0.15), bubble.y - bubble.offset - (bubble.diameter * 0.2), bubble.diameter / 8, bubble.diameter / 8);
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