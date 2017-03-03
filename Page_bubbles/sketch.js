// Created by Danielle Teska and Lulu Xiao
// Last edited Thursday, March 2, 2017
// This creates the "Sad Panda" page.

var secretX = 570;
var secretY = 350;

function setup() {
  createCanvas(1200, 700);
}

function draw() {
  background(230);
  secretMessage(secretX, secretY);
}

function secretMessage() {
  textSize(40);
  fill(0, 102, 153);
  textStyle(BOLD);
  textAlign(CENTER);
  text("You are a rockstar!!!", secretX, secretY);
}