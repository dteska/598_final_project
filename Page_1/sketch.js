// Created by Danielle Teska and Lulu Xiao
// Last edited Thursday, March 2, 2017
// This creates the first page of our final HCDE program. The user answers a question to be
// advanced to another state. 

//TO-DO
//Add functionality for buttons

var mesX = 100;
var mesY = 300;
var butX = 360;
var butY = 360;

function setup() {
  createCanvas(1200, 700);
}

function draw() {
  background(230);
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