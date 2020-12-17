
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world
var paper,ground;
var dustbin1,dustbin2,dustbin3;
function preload()
{
	dustbin=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1600, 700);
    
	
	

	engine = Engine.create();
	world = engine.world;
  
	//Create the Bodies Here.
    paper=new Paper(200,650,20)
	ground=new Ground(width/2,670,width,20)
	dustbin1=new Dustbin(1100,650,100,10)
	dustbin2=new Dustbin(1050,605,10,100)
	dustbin3=new Dustbin(1150,605,10,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display()
  ground.display()
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
  image(dustbin,1050,550,100,100)
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.Body,paper.Body.position,{x:100,y:-65})
	}
}


