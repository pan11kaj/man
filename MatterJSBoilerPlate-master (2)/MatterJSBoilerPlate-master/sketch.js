
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree,treeimg,boy,boyimg;
function preload()
{
	treeimg = loadImage("tree.png");
	boyimg = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);
    tree = createSprite(500,480,40,40);
	tree.addImage(treeimg);
	tree.scale = 0.3;
	
	boy = createSprite(140,580,20,20);
	boy.addImage(boyimg);
	boy.scale = 0.13;
	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here. 
    ground = new Ground();        
	mango = new Mango(420,370,40);
	mango2 = new Mango(450,360,40);
	mango3 = new Mango(550,400,40);
	mango4 = new Mango(430,430,40);
	stone = new STONE(60,470,40);
	rope = new Chain(stone.body,{x:60,y:500});
    		
}

function draw() {
  rectMode(CENTER);
  background("red");
  Engine.update(engine);
  textSize(20);
  text("press space to a chance",100,100);
  

   ground.display();
   
   console.log(detectCollision);
  
 
   drawSprites();
  mango.display();
  mango2.display();
  mango3.display();
  mango4.display();
  rope.display();  
  stone.display();  
  detectCollision(stone,mango);
   detectCollision(stone,mango2);
   detectCollision(stone,mango3);
   detectCollision(stone,mango4);
   
  }

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
rope.fly();
	
}
function keyPressed(){
if(keyCode===32){
Matter.Body.setPosition(stone.body,{x:60,y:500});
rope.attach(stone.body);
}
	
}
function detectCollision(lstone,lmango){
  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;
  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
  if(distance<=lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body,false);
  } 


}