// Created by Danielle Teska and Lulu Xiao
// Last edited Friday, March 3, 2017
// This is the final project for our HCDE 598 class. The user choose whether they want to see a message or 
// answer a question. If the user chooses yes, the user is directed to a page where they can pop bubbles to see
// the message. If the user chooses no, the user is directed to a differnt page. They are allowed
// to change their mind if they want, however. 

//TO-DO
// Add in functionality for the buttons. 
// Make everything prettier...

var page = 0
  // This stuff pertains to the first page. 
var mesX = 100;
var mesY = 300;
var butX = 360;
var butY = 360;
//This stuff pertains to Try Again page.
var octoX = 100; // This is the variable for the message and octocat's x-position. 
var octoY = 400; // This is the varialbe for the message and octocat's y-position. 
var bubButX = 360; // This is the variable for the bubble message's x-position. 
var bubButY = 420; // This is the variable for the bubble message's y-position. 
var aspectRatio = 201 / 264

function preload() {
  cat = loadImage("octocat_sad.png"); // This loads in the image of the Octocat. Used the png file because 
  // it has a transparent background. 
}

function setup() {
  createCanvas(1200, 700);
  background(230);
  firstPage();
}

function draw() {
  mouseClicked; 
}

// function mousePressed () {
//   if (page == 0) {
//   if (mouseX > butX+250 && mouseX < butX+470 && mouseY > butY && mouseY < butY+50) {
//     background(230);
//     tryAgainPage(); 
//     }
//   } else {
//     }
// }  

function mouseClicked() {
  if (page === 0) {
    if (mouseX > butX+250 && mouseX < butX+470 && mouseY > butY && mouseY < butY+50) {
    background(230);
    tryAgainPage();
  }
  else {
    print()
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
  text("Alright, let's pop some bubbles!", bubButX + 85, bubButY + 40);
}

/////////////////////////////// END OF TRY AGAIN PAGE CODE ///////////////////////////////