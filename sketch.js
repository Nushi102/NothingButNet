
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world
var ground, box1, box2
var ball


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
    var b_options={
		isStatic: false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball=Bodies.circle(260,100,20,b_options)
	World.add(world,ball)
	//Create the Bodies Here.
    ground= new Ground(width/2, height-30,width,20)
	box1= new Ground(1100, 600,20,120)
    box2= new Ground(1350, 600,20,120)

	Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS)
  fill("white")
  ellipse(ball.position.x,ball.position.y,30,30)
  ground.display()
  box1.display()
  box2.display()


  drawSprites();
  
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}


