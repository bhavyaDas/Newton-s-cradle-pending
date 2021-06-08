
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3, bob4,bob5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;
var newton,newton1


function preload(){
	newton=loadImage("newton.jpg")
   
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(200,250,800,20);

	bob1 =new mercury(320,575,40)
	bob2 =new venus(360,575,40)
	bob3 =new earth(400,575,40)
	bob4 =new mars(440,575,40)
	bob5 =new jupiter(480,575,40)
	bob6 =new saturn(520,575,40)
	bob7 =new uranus(560,575,40)
	bob8 =new neptune(600,575,40)
	
	rope1=new rope(bob1.body,roofObject.body,-80, 0)
	rope2=new rope(bob2.body,roofObject.body,-40, 0)
	rope3=new rope(bob3.body,roofObject.body,0,0)
	rope4=new rope(bob4.body,roofObject.body,40,0)
	rope5=new rope(bob5.body,roofObject.body,80,0)
	rope6=new rope(bob6.body,roofObject.body,120,0)
	rope7=new rope(bob7.body,roofObject.body,160,0)
	rope8=new rope(bob8.body,roofObject.body,200,0)
	
	Engine.run(engine);
	
  newton1=createSprite(width/2+500,height/2)
  newton1.addImage("newtonImage",newton)
}


function draw() {
	
  rectMode(CENTER);
  background("pink");
  textSize(100)
  fill("purple")
  stroke("black")
  strokeWeight(4)
text(`Newton's Cradle`,width/2-500,height/2-200)
drawSprites()
  rope1.display();
  rope2.display();

  rope3.display()
  rope4.display()
  rope5.display()
  rope6.display()
  rope7.display()
  rope8.display()
  
  bob1.display();
  bob2.display();
  bob3.display()
	  bob4.display()
bob5.display()
bob6.display()
bob7.display()
bob8.display()

roofObject.display();
 
}


function keyPressed(){
if (keyCode==LEFT_ARROW){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
}

if (keyCode==RIGHT_ARROW){
	Matter.Body.applyForce(bob2.body,bob2.body.position,{x:50,y:-45})
}

if (keyCode==UP_ARROW){
	Matter.Body.applyForce(bob3.body,bob3.body.position,{x:50,y:-45})
}

if (keyCode==DOWN_ARROW){
	Matter.Body.applyForce(bob4.body,bob4.body.position,{x:-50,y:-45})
}

}



