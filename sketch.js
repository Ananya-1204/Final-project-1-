
const Engine = Matter.Engine;
const World = Matter.World; 
const Bodies = Matter.Bodies;
var NinjaCat;
var m1, m2, m3, m4, m5, m6;
var edges;
var gamestate = 0;
var s1, s2, s3, s4, s5;
var score = 0;
var cp1, cp2, cp3, cp4;
//var world, engine;

function setup() {
  createCanvas(800,400);
  //engine = Engine.create();
  //world = engine.world;
  //NinjaCat = Bodies.rectangle(5, 5, 15, 15);
  //World.add(world, NinjaCat);
  NinjaCat = createSprite(0, 200, 15, 15);
  m1 = createSprite(0, 240, 800, 40);
  m2 = createSprite(0, 0, 800, 40);
  m3 = createSprite(0, 200, 800, 40);
  m4 = createSprite(450, 110, 20, 350);
  m5 = createSprite(350, 270, 200, 30);
  s1 = createSprite(420, 245, 40, 20);
  s1.shapeColor = "red";
  cp1 = createSprite(350, 110, 10, 200);
  cp1.shapeColor = "blue";
  s2 = createSprite(212, -27, 50, 20);
  s2.shapeColor = "red";
  m6 = createSprite(-387, 82, 40, 300);
  s3 = createSprite(20, -27, 90, 20);
  s3.shapeColor = "red";
   //edges = createEdgSprites(); 
}

function draw() {
  background("yellow");  
  //Engine.update(engine);
  if(keyDown(RIGHT_ARROW)){
    NinjaCat.x += 10;
  }
  if(keyDown(LEFT_ARROW)){
    NinjaCat.x -= 10;
  }
  //m1.x = NinjaCat.x/2;
  if(keyDown(UP_ARROW)){
    NinjaCat.velocityY = -5; 
  }
  NinjaCat.velocityY = NinjaCat.velocityY + 0.5;
  NinjaCat.collide(m1);
  NinjaCat.collide(m2);
  NinjaCat.collide(m3);
  NinjaCat.collide(m4);
  NinjaCat.collide(m5);
  NinjaCat.collide(m6);
  if(NinjaCat.x >= 400){
    gamestate = 1;
    //m2.destroy();
    //m1.destroy();
    //m3.destroy();
  }
  if(NinjaCat.isTouching(s1)||NinjaCat.isTouching(s2)|| NinjaCat.isTouching(s3)) {
    restart();
  }
  if(NinjaCat.isTouching(cp1)){
    score += 500;
    cp1.shapeColor = "lightblue";
  }
  camera.x = NinjaCat.x;
  camera.y = NinjaCat.y;
  textSize(20);
  fill("black");
  text("score: " + score, NinjaCat.x - 390, NinjaCat.y + 190);
  drawSprites(); 
  console.log(NinjaCat.x);
  console.log(NinjaCat.y);
}
function restart() {
  NinjaCat.x = 0;
  NinjaCat.y = 100;
  score = 0;
  cp1.shapeColor = "blue";
}