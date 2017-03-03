// Created by Danielle Teska and Lulu Xiao
// Last edited Thursday, March 2, 2017
// This creates the bubble popping page. 

var bubbles = [];

function setup() {
  createCanvas(1200, 700);
  for (var i=0; i<100; i++) {
    bubbles.push(new Jitter());
  }
}

function draw() {
  background(230); // This makes the background gray like the others. 
  secretMessage(); // This calls the secret message function. 
  for (var i=0; i<bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
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

// This makes the moving bubbles. 
function Jitter() {
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
    fill (71, 130, 158, 0.5 * 255);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}