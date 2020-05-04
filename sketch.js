function setup() {
  createCanvas(1200,600);
}

function draw() {
  background(0);

  rect (200, 150, 150, 400);
  rect (800, 150, 150, 400);
  rect (350, 250, 80, 300);
  rect (720, 250, 80, 300);
  rect (430, 350, 80, 200);
  rect (640, 350, 80, 200);
  rect (510, 300, 130, 250);

  triangle(200, 150, 275, 50, 350, 150)
  triangle(800, 150, 875, 50, 950, 150)
  triangle(510, 300, 575, 160, 640, 300)

}