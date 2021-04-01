const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



function setup() {
	createCanvas(1000, 500);

   platform = new Ground(1000,450,1200,20);
     

	engine = Engine.create();
	world = engine.world;
}

function draw(){
    background("black");

   platform.display();
}