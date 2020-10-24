var p1, p1_image;
var bg, bg_image1,bg_image2, invisibleGround;
var option_1, option_2;
var rockGroup, rock, rock_image;
var score;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var gameover, restart,gameover_img,restart_img;
var optionA, optionB;
var delay ;

function preload(){
  p1_image = loadImage("person.png");
  bg_image1 = loadImage("JungleBackground.png") ;
  bg_image2 = loadImage("HouseBackground.png") ;
  rock_image = loadImage("rock.png");
  gameover_img=loadImage("gameOver.png");
  restart_img=loadImage("restart.png");
}

function setup() {
  createCanvas(600, 200);
  delay = frameCount;
  bg = createSprite(300,100,3000,200);
  bg.scale = 2.5;
  bg.addImage("backGround",bg_image1);
 bg.x = bg.width /2;
  bg.velocityX = -4;
  
  p1 = createSprite(50,180,20,50);
  p1.addAnimation("person", p1_image);
  p1.scale = 0.3;

  invisibleGround = createSprite(200,198,400,10);
  invisibleGround.visible = false;
  
  rockGroup = new Group();  
  score = 0;
  
 gameover=createSprite(300,50,5,5);
 gameover.addImage(gameover_img);
 gameover.visible=false;
  restart=createSprite(300,100,5,5);
  restart.addImage(restart_img);
  restart.scale=0.5;
  restart.visible=false;
}

function draw() {
  background(0);
  drawSprites();

  if(gameState===PLAY){

  text("Score: "+ score, 500,50);
  
  if(keyDown("space")) {
    p1.x = p1.x+2;
  }
 
  if (bg.x < 280){
    bg.x = bg.width/2;
  }
  
 // p1.collide(invisibleGround);
  spawnRocks();


  if(p1.isTouching(rockGroup))
  {
    rockGroup.setVelocityXEach(0);
 question_answers1();



if(delay===5000 && score===1)
     {
      question_answers2();
     }
else {
       gameState = END;
     }
}
if(score===2)
{
text("Welcome to your home",200,200);
bg.addImage(  bg_image2);

}

}
else if (gameState===END){
  gameover.visible=true;
  restart.visible=true;  
}
if(mousePressedOver(reset)){
  reset();
}
}

function reset(){ 
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;
 
  score = 0; }



function spawnRocks() {
  if(frameCount % 100 === 0) {
    rock = createSprite(600,165,10,40);
    rock.addImage(rock_image);
    rock.velocityX = -4;
  
    //generate random obstacles
  
    //assign scale and lifetime to the obstacle           
    rock.scale = 0.2;
    rock.lifetime = 150;
    //add each obstacle to the group
    rockGroup.add(rock);
  }
}
function  question_answers1()
{   textSize(15);
    fill("purple");
    text("What are the reactants of photosynthesis?", 300,80);
  
if(delay === 2500)
{
    optionA = createSprite(120,10,20,20);
    optionA.shapeColor= "white";
    textSize(15);
    fill("red");
     text("A: water, carbon dioxide, sunlight", 120, 150);
     optionB = createSprite(270,100,20,20);
     optionB.shapeColor= "white";
     textSize(15);
     fill("red");
     text("B: glucose, oxygen, sunlight", 270, 150);
     if(mousePressedOver(optionA)){
      optionA.shapeColor= "green";
      score= score + 1;
    }
    else if(mousePressedOver(optionB)){
      gameover.visible = true;
      restart.visible = true;
}
}

   
}

function  question_answers2()

{ 
     textSize(30);
     fill("purple");
     text("What are the reactants of Cellular Respiration?", 300,80);
     optionA = createSprite(120,100,20,20);
     optionA.shapeColor= "white";
     textSize(20);
     fill("red");
     text("A: water, carbon dioxide, sunlight", 120, 150);
     optionB = createSprite(270,100,20,20);
     optionB.shapeColor= "white";
     textSize(20);
     fill("red");
     text("B: glucose, oxygen, sunlight", 270, 150);
     if(mousePressedOver(optionB)){
      optionB.shapeColor= "green";
      score= score + 1;
    }
     else if(mousePressedOver(optionA)){
        gameover.visible = true;
        restart.visible = true;
    }
       
}
