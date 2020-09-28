var fixedRect, movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1 = createSprite(100,100,50,50);
  gameObject2 = createSprite(200,100,50,50);
  gameObject3 = createSprite(300,100,50,50);
  gameObject4 = createSprite(400,100,50,50);
  gameObject3.velocityY = -5;
  gameObject4.velocityY = 5;
}

function draw() {
  background(0,0,0);  
  gameObject3.x = World.mouseX;
  gameObject3.y = World.mouseY;

  if (isTouching(gameObject3,gameObject4)){
    gameObject3.shapeColor = "red";
    gameObject4.shapeColor = "red";
  }
  else{
    gameObject3.shapeColor = "green";
    gameObject4.shapeColor = "green";

  }

bounceOff(gameObject3,gameObject4);
  
  drawSprites();
}
