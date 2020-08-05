
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
function preload()
{}
function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(400,650,800,20,ground_options);
    World.add(world,ground);

	Engine.run(engine);
	ball1 = new Ball(100,500,25);

	boxBottom = new Box(500,630,200,20);
	boxLeft = new Box(400,590,20,100);
	boxRight = new Box(600,590,20,100);


  
}
function draw() {
  background(0);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);

  ball1.display();

  boxBottom.display();
  boxLeft.display();
  boxRight.display();
  
  keyPressed();
  drawSprites();
}
function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85});
  }
}