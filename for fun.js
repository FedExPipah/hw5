function setup() {
  createCanvas(400, 400);
}

function draw() {
  stroke(random(200),40,80);
  background(220);
  rectMode(CENTER);

for (var x = 10; x < width-10; x = x + 5) {
    line(x, height/2, x, x);
}
}
