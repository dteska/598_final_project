// Created by Danielle Teska and Lulu Xiao
// Last edited Thursday, March 2, 2017
// This creates the "Sad Panda" page.

var octoX = 100; // This is the variable for the message and octocat's x-position. 
var octoY = 400;  // This is the varialbe for the message and octocat's y-position. 
var bubButX = 360; // This is the variable for the bubble message's x-position. 
var bubButY = 420; // This is the variable for the bubble message's y-position. 
var aspectRatio = 201 / 264

function preload() {
  cat = loadImage("octocat_sad.png"); // This loads in the image of the Octocat. Used the png file because 
  // it has a transparent background. 
}

function setup() {
  createCanvas(1200, 700);
}

function draw() {
  background(230); // This makes the background gray.
  message(octoX, octoY); // This calls the message function at the defined x, y position. 
  button(bubButX, bubButY); // this calls the button function 
  image(cat, octoX + 350, octoY - 300, 300, 300 * aspectRatio);
}

// This is the function for the text shown on the page.
function message() {
  textSize(40);
  fill(0, 102, 153);
  textStyle(BOLD);
  text("Sad Octocat. Click the button if you change your mind.", octoX, octoY);
}

// This makes the buttons
function button() {
  fill(74, 77, 81);
  noStroke();
  rect(bubButX, bubButY, 450, 70, 10);
  fill(255);
  textSize(20);
  textStyle(NORMAL);
  text("Alright, let's pop some bubbles!", bubButX + 85, bubButY + 40);
}