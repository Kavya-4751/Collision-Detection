var fixRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(400, 200, 80, 30);
  fixRect.shapeColor = "blue";
  movingRect.shapeColor = "blue";
}

function draw() {
  background(0); 
  movingRect.x = mouseX;
  movingRect.y = mouseY; 
  if (movingRect.x-fixRect.x < fixRect.width/2 + movingRect.width/2 &&
    fixRect.x-movingRect.x< fixRect.width/2 + movingRect.width/2 &&
    movingRect.y-fixRect.y< fixRect.height/2 + movingRect.height/2 &&
    fixRect.y-movingRect.y< fixRect.height/2 + movingRect.height/2){
    movingRect.shapeColor = "red";
    fixRect.shapeColor = "red";
  }
  else{
    fixRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }
  drawSprites();
}