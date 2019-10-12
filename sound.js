//https://editor.p5js.org/Rebeybee/sketches/zkoD_xSay
var mySound;

function preload() {
  soundFormats("wav");
  mySound = loadSound("chicken-1.wav");
}



function setup() {
  createCanvas(600, 600);
  colorMode(HSB);

}

function draw() {
  background(255);
  stroke(random(200), 40, 80);
  for (var x = 10; x < width - 10; x = x + 5) {
    line(x, height / 2, mouseX, mouseY);
    ellipse(mouseX, mouseY, 50, 50);
    fill(100, 40, 100);
    ellipse(mouseX, mouseY, 40, 40);

  }
  if (mouseIsPressed) {
    mySound.play();
  }
}
