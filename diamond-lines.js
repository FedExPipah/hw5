function setup() {
  createCanvas(600, 600);
  colorMode(HSB);
}

function draw() {
  background(255);
stroke(random(200),40,80);
  for (var x = 10; x < width-10; x = x + 5) {
    line(x, height/2,300,10);
       line(300, 600,x,height/2);
  
  }
}
