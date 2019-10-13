var x = [20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 380, 400, 420, 440, 460, 480, 500];

function setup() {
  createCanvas(360, 400);

}

function draw() {
  background(0);
  noStroke();
  for (var i = 0; i < 24; i = i + 1) {
    ellipse(x[i], height / 3.7, 15);
    ellipse(x[i], height / 3, 15);
    ellipse(x[i], height / 5, 15);
    ellipse(x[i], height / 7, 15);
    ellipse(x[i], height / 2.5, 15);
    ellipse(x[i], height / 2.18, 15);
    ellipse(x[i], height / 1.9, 15);
    ellipse(x[i], height / 1.71, 15);
    ellipse(x[i], height / 1.56, 15);
    ellipse(x[i], height / 1.43, 15);
    ellipse(x[i], height / 1.32, 15);
    ellipse(x[i], height / 1.22, 15);
    ellipse(x[i], height / 1.14, 15);

  }
}
