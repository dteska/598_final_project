// Created by Danielle Teska and Lulu Xiao
// Last edited Thursday, March 2, 2017
// This creates the bubble popping page. 


function setup() {
  createCanvas(1200, 700);
  
}

function draw() {
  background(230); // This makes the background gray like the others. 
  secretMessage(); // This calls the secret message function. 
}

// This displays the secret message on the screen. Since the message will always in the middle of the
// page, I made the position half the width and height of the defined canvas. 
function secretMessage() {
  textSize(40);
  fill(0, 102, 153);
  textStyle(BOLD);
  textAlign(CENTER);
  text("You are a rockstar!!!", width/2, height/2);
}
