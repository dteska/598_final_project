// Created by Danielle Teska and Lulu Xiao
// Last edited Thursday, March 2, 2017
// This creates the first page of our final HCDE program. The user answers a question to be
// advanced to another state. 

function setup() {
  createCanvas (1200, 700);
}

function draw() {
  background (230);
  message ();
  buttons(); 
}

// This is the function for the text shown on the page.
function message (){
  textSize(40);
  fill (0, 102, 153);
  textStyle(BOLD);
  text ("Do you want to pop some bubbles to see a message?", 100, 300);
}

// This makes the buttons
function buttons(){
  fill (74, 77, 81);
  noStroke();
  rect(360, 360, 220, 50, 10);
  rect(610, 360, 220, 50, 10);
  fill(255);
  textSize(20);
  textStyle(NORMAL);
  text("Yes, definitely!", 400, 390);
  text ("No, not feeling it", 645, 390);
}
