const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var particles=[]
var divisions=[]
var plinkos=[]

var divisionHeight=300;
function preload(){
}

function setup() {
	createCanvas(480,800);

	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here;
  ground1=new Ground(240,790,500,15);

  border1=new border(240,795,width,5);
  border2=new border(240,5,width,5);
  border3=new border(5,400,5,height);
  border4=new border(475,400,5,height);

  for(var k=0; k<=width; k=k+80){
    divisions.push(new division(k, height-divisionHeight/2,10,divisionHeight));
  }

  for(var j=40; j<=width; j=j+50){
    plinkos.push(new plinko(j,75));
 }

    for(var j=15; j<=width-10; j=j+50){
    plinkos.push(new plinko(j,175));
}

for(var j=40; j<=width; j=j+50){
  plinkos.push(new plinko(j,275));
}

for(var j=15; j<=width-10; j=j+50){
  plinkos.push(new plinko(j,375));
}


Engine.run(engine);

}
function draw() {
  rectMode(CENTER);
  background("black");

  ground1.display();
  border1.display();
  border2.display();
  border3.display();
  border4.display();

  for(var j=0; j<plinkos.length; j++){
    plinkos[j].display();
     }
  if(frameCount%60===0){
    particles.push(new particle(random(width/2-30,width/2+30),10,10));
  }
  for(var i=0; i<particles.length; i++){
    particles[i].display();
  }

  for(var k=0; k<divisions.length; k++){
    divisions[k].display();
}
} 