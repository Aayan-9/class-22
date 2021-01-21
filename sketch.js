const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  }
  ground = Bodies.rectangle(200,390,400,20,options);
  
  World.add(world,ground);
  var ball_options={
  restitution:1
  }
  ball = Bodies.circle(200,100,10,ball_options);
  World.add(world,ball);
  // console.log(object1);
  // console.log(object1.type);
  // console.log(object1.position.x);
  // console.log(object1.position.y);
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  fill("brown");
  rect(ground.position.x,ground.position.y, 400,20);
  ellipseMode(RADIUS)
  fill(255);
  ellipse(ball.position.x,ball.position.y,10,10);
}