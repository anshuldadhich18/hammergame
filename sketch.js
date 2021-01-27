
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 
   ground1=new Ground(400,680,800,20)
   stone1=new Stone(300,590)
   rubber1=new Rubber(350,200)
   hammer=new Hammer(200,550)
  
}


function draw() {
  Engine.update(engine)
  rectMode(CENTER);
  background("lightblue");
  
  ground1.display();
  stone1.display();
  rubber1.display();
  hammer.display();
 
}



