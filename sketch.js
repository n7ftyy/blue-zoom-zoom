var ball = {
  x: 200,
  y: 200,
  r: 30,
  xspeed: 0,
  yspeed: 0,
  color: ["red", "blue", "green", "yellow"],
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(ball.x, ball.y, ball.r)
  fill(ball.color[1])
  ball.xspeed = 5
  ball.x += ball.xspeed
}