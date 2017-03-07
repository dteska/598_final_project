// Created by Danielle Teska and Lulu Xiao
// Last edited Tuesday, March 7, 2017
// This is the final project for our HCDE 598 class. The user chooses whether they want to see a message 
// by popping bubbles. If the user chooses yes, the user is directed to a page where they can pop bubbles to see
// the message. If the user chooses no, the user is directed to a differnt page. They are allowed
// to change their mind if they want, however. 

var page = 0
  // These variables pertain to the first page. 
var mesX = 100;
var mesY = 300;
var butX = 360;
var butY = 360;
// These variables pertain to the Try Again page.
var octoX = 100; // This is the variable for the message and octocat's x-position. 
var octoY = 400; // This is the varialbe for the message and octocat's y-position. 
var bubButX = 360; // This is the variable for the bubble message's x-position. 
var bubButY = 420; // This is the variable for the bubble message's y-position. 
var aspectRatio = 201 / 264
  // These variables pertain to the Bubbles page. 
var bubbles = [];
var totalBubbles = 100;
var playButX = 380;
var playButY = 340;

function preload() {
  cat = loadImage("octocat_sad.png"); // This loads in the image of the Octocat. Used the png file because 
  // it has a transparent background. 
}

function setup() {
  createCanvas(1200, 700); // This sets the canvas size to 1200 in width and 700 in height. 
  background(230); // This makes the background gray.
  bubbleSetup();
}

function draw() {
  background(230); // This refreshes the background to gray.
  if (page === 0) { // This loads the first page with the question.
    firstPage(); // This calls the first page function with the string and buttons. 
  } else if (page === 1) { // This loads the second page.
    tryAgainPage(); // This calls the try again page with string and buttons. 
  } else if (page === 2) { // This loads the third page with bubbles. 
    bubblesPage(); // This calls the bubbles page function. 
  }
}

// This function defines what the buttons on the different pages will do when the user clicks the button with his/her mouse. 
function mouseClicked() {
  // if user clicks right button on 1st page, takes to sad page
  if (page === 0) {
    if (mouseX > butX + 250 && mouseX < butX + 470 && mouseY > butY && mouseY < butY + 50) {
      page = page + 1; //draw up the tryAgainPage
    } else if (mouseX > butX && mouseX < butX + 220 && mouseY > butY && mouseY < butY + 50) {
      bubbleSetup();
      page = page + 2;
    }
  }
  // if user clicks "Alright, let's pop some bubbles" button, returns to bubble page 
  else if (page === 1) {
    if (mouseX > bubButX && mouseX < bubButX + 450 && mouseY > bubButY && mouseY < bubButY + 70) {
      bubbleSetup();
      page = page + 1;
    }
  } else if (page === 2) {
    if (mouseX > playButX && mouseX < playButX + 450 && mouseY > playButY && mouseY < playButY + 70 > 0) {
      page = 2 - page;
    }
  }
}
/////////////////////////////// START OF FIRST PAGE CODE ///////////////////////////////

// This function creates the entire first page. 
function firstPage() {
  message(mesX, mesY);
  buttons(butX, butY);
}

// This is the function for the text shown on the page.
function message() {
  textSize(40);
  fill(0, 102, 153);
  textStyle(BOLD);
  textAlign(LEFT);
  text("Do you want to pop some bubbles to see a message?", mesX, mesY);
}

// This makes the buttons
function buttons() {
  fill(74, 77, 81);
  noStroke();
  rect(butX, butY, 220, 50, 10);
  rect(butX + 250, butY, 220, 50, 10);
  fill(255);
  textSize(20);
  textStyle(NORMAL);
  textAlign(LEFT);
  text("Yes, definitely!", butX + 40, butY + 30);
  text("No, not feeling it", butX + 285, butY + 30);
}
/////////////////////////////// END OF FIRST PAGE CODE ///////////////////////////////

/////////////////////////////// START OF TRY AGAIN PAGE CODE ///////////////////////////////

// This is the function for the entire try again page. 
function tryAgainPage() {
  image(cat, octoX + 350, octoY - 300, 300, 300 * aspectRatio); // This calls the image at the defined
  tryAgainMessage(octoX, octoY); // This calls the message function at the defined x, y position. 
  tryAgainButton(bubButX, bubButY); // This calls the button function at the defined x, y position. 
}

// This is the function for the message shown on the page.
function tryAgainMessage() {
  textSize(40);
  fill(0, 102, 153);
  textStyle(BOLD);
  textAlign(LEFT);
  text("Sad Octocat. Click the button if you change your mind.", octoX, octoY);
}

// This makes the button that leads the users to bubble page. 
function tryAgainButton() {
  fill(74, 77, 81);
  noStroke();
  rect(bubButX, bubButY, 450, 70, 10);
  fill(255);
  textSize(20);
  textStyle(NORMAL);
  textAlign(LEFT);
  text("Alright, let's pop some bubbles!", bubButX + 85, bubButY + 40);
}
/////////////////////////////// END OF TRY AGAIN PAGE CODE ///////////////////////////////

//////////////////////// START OF BUBBLE PAGE CODE /////////////////////////////

// This function setups the bubbles. 
function bubbleSetup() {
 for (var i = 0; i < totalBubbles; i++) { // Initiates setup. This loops makes many bubbles. The total number is set as a variable above. 
    bubbles.push({ // This whole section identifies the "start" state of the bubbles. 
      x: random(0, width), // This says the bubble will appear at some random x-position within the canvas. 
      y: random(0, height), // Same as above, but for y-position. 
      diameter: random(200, 300), // The bubble diameters will vary between 100 to 300.
      offset: 0, // The offset starts at zero. 
      popped: false, // All bubbles start as not popped. 
      textOpacity: 1 // The text opacity starts at 1. 
    });
  } 
}
  
// This function calls the bubbles, message, and button for the page. 
function bubblesPage() {
  secretMessage();
  playAgainButton();
  bubbles.forEach(function(bubble) { // This makes the bubbles individual entities.
    // drawBubble(bubble);
    // wasClickInsideBubble(bubble);
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
function mousePressed() {
  bubbles.forEach(function(bubble) {
    if (wasClickInsideBubble(bubble)) {
      bubble.popped = true;
      console.log('Popped!');
    }
  });
}

// This function draws the bubbles. The bubbles jitter a little bit to simulate a floating movement in 
// a contained space.
function drawBubble(bubble) {
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
/////////////////////////////// END OF BUBBLE PAGE CODE ///////////////////////////////