var box, box_moving, box_collided;
var invisibleGround;
var bg;
var cloudsGroup, cloudImage;
var obstaclesGroup, obstacleImg,obstacle;

var score;


function preload(){
  box_moving = loadImage("resources/box.png");
  //box_collided = loadImage("resources/");
  
  backgroundImage = loadImage("resources/backyboi.png");
  obstacleImg = loadImage("resources/spikeyman.webp");
}

function setup() {
  createCanvas(800, 400);
 
  box = createSprite(50,340,20,50);
  box.addImage("moving", box_moving);
  box.scale = 0.2;

  invisibleGround = createSprite(400,350,800,20);
  invisibleGround.visible = false;
  
  obstaclesGroup = new Group();
  
  score = 0;
}

function draw() {
  background(backgroundImage);
  
  score = score + Math.round(getFrameRate()/60);
  text("Score: "+ score, 700,50);
  
  if(keyDown("space") && box.y > 300) {
    box.velocityY = -10;
  }
  
  box.velocityY = box.velocityY + 0.8;
  
  /*if (bg.x < 0){
    bg.x = bg.width/2;
  }*/
  
  box.collide(invisibleGround);
 
  spawnObstacles();

  drawSprites();
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(800,330);
    obstacle.addImage(obstacleImg);
    obstacle.scale = 0.15;
    obstacle.velocityX = -4;    

    obstacle.lifetime = 200;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}