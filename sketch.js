var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  gameObject1 = createSprite(100, 100, 50, 80);
  gameObject2 = createSprite(200, 100, 50, 80);
  gameObject3 = createSprite(300, 100, 50, 80);
  gameObject4 = createSprite(400, 100, 50, 80);
  gameObject1.shapeColor = "red";
  gameObject2.shapeColor = "yellow";
  gameObject3.shapeColor = "pink";
  gameObject4.shapeColor = "grey";
}

function draw() {
  background(0,0,0);  

  

  if(isTouching(movingRect, gameObject4)){
    movingRect.shapeColor = "blue";
    gameObject4.shapeColor = "blue";
  }

    else {
      movingRect.shapeColor = "green";
      gameObject4.shapeColor = "green";
    }

  drawSprites();
}

