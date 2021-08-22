const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var button,ball,blower,blowerPipe;

function setup() {
  engine = Engine.create();
  world = engine.world;
  
  createCanvas(800,400);

  button = createButton("Click to Blow");
  button.position(width/2,height-100);
  button.mousePressed(blow);

  blower = new Blower(500,220,80,80);
  blowerPipe = new BlowerPipe(385,240,150,20)
  ball = new Ball(510,150,25);
}

function draw() {
  background("gray")
  Engine.update(engine);

  ball.show();
  blower.show();
  blowerPipe.show();

  drawSprites();
}

function blow(){
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.05});
}