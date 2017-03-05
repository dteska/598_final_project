// Created by Danielle Teska and Lulu Xiao
// Last edited Thursday, March 2, 2017
// This creates the bubble popping page. 

var bubbles = [];
var totalBubbles = 100;
var playButX = 380;
var playButY = 340;

function setup() {
  createCanvas(1200, 700); // This sets the canvas size. 
  for (var i = 0; i < totalBubbles; i++) { // This loops makes many bubbles. The total number is set as a variable above. 
    bubbles.push({ // This whole section identifies the "start" state of the bubbles. 
      x: random(0, width), // This says the bubble will appear at some random x-position within the canvas. 
      y: random(0, height), // Same as above, but for y-position. 
      diameter: random(300, 300), // The bubbles will vary in size but be between 300 in width and 300 in height. 
      offset: 0, // The offset starts at zero. 
      popped: false, // All bubbles start as not popped. 
      textOpacity: 1 // The text opacity starts at 1. 
    });
  }
}

function draw() {
  background(230); // This makes the background gray like the others. 
  test ();
}


function test(){
  secretMessage(); // This calls the secret message function. 
  playAgainButton(); // This calls the play again button.
  bubbles.forEach(function(bubble) { // This makes the bubbles individual entities. 
    if (bubble.popped) { // This defines what happens if the bubble is popped. 
      textSize(24); // This says the "**pop**" text will be size 24. 
      textAlign(CENTER); // This aligns the "**pop**" text in the center. 
      fill('rgba(255,525,255,' + bubble.textOpacity + ')');  
      text('**pop**', bubble.x, bubble.y - bubble.offset); // This writes the "**pop**" text at a certain position near the bubble. 
      if (bubble.textOpacity > 0.01) { // This if else function defines how the text appears and then fades away and what to do when 
      // the bubble is popped. 
        bubble.textOpacity -= 0.01; // See above. 
      } else { // See above. 
        bubble.textOpacity = 0; // See above.
      }
    } else { // See above. 
      drawBubble(bubble); // See above. 
    }
  });
}

// This function defines if a click is inside a button and, if so, what value to return and what action
// to take. 
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

// This function "pops" the bubbles when the user clicks inside the bubble.
function mouseClicked() {
  bubbles.forEach(function(bubble) {
    if (wasClickInsideBubble(bubble)) {
      bubble.popped = true;
      console.log('popped!');
    }
  });
}

// This function draws the bubbles. The bubbles jitter a little bit to simulate a floating movement in 
// a contained space.
function drawBubble(bubble) {
  if (bubble.offset > height + 400) {
    bubble.offset = 0;
  }
  bubble.offset = random(-.5, .5);
  //  This makes the main bubble
  fill(71, 130, 158, 0.9 * 255);
  stroke('white');
  ellipse(bubble.x - bubble.offset, bubble.y - bubble.offset, bubble.diameter, bubble.diameter);
  // This makes the "air" icon on bubble
  fill('white');
  ellipse(bubble.x + (bubble.diameter * 0.2) - bubble.offset, bubble.y - bubble.offset - (bubble.diameter * 0.25), bubble.diameter / 8, bubble.diameter / 8);
  // This makes the rest of the bubbles.
  fill(71, 130, 158);
  noStroke();
  ellipse(bubble.x + (bubble.diameter * 0.15) - bubble.offset, bubble.y - bubble.offset - (bubble.diameter * 0.2), bubble.diameter / 8, bubble.diameter / 8);
}

// This displays the secret message on the screen. Since the message will always in the middle of the
// page, I made the position half the width and height of the defined canvas. 
function secretMessage() {
  textSize(40);
  fill(0, 102, 153);
  textStyle(BOLD);
  textAlign(CENTER);
  text("You are a rockstar!!!", width / 2, 320);
}

// This function creates the play again button that users can click to start over.
function playAgainButton() {
  fill(74, 77, 81);
  noStroke();
  rect(playButX, playButY, 450, 70, 10);
  fill(255);
  textSize(20);
  textStyle(NORMAL);
  text("Click to play again!", playButX + 220, playButY + 40);
}