var ball,img,paddle,obstacleImg,obstacleGroup,backgrounds, score;
function preload() {
  ballImage = loadImage("ball.png");
  paddleImage = loadImage("paddle.png");
  
  /* preload your images here of the ball and the paddle */
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  ball = createSprite(200,200);
 paddle = createSprite(350, 200);
  /* assign the images to the sprites */
    ball.addImage(ballImage);
    paddle.addImage(paddleImage);
  backgrounds = createSprite(400,400);
  backgrounds.velocityX = -3;
   backgrounds.x = backgrounds.width/2;
  /* give the ball an initial ve0locity of 9 in the X direction */
  ball.velocityX = 9;

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edges = createEdgeSprites();
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
   
  ball.bounceOff(paddle,randomVelocity);
  ball.bounceOff(edges[2]);
ball.bounceOff(edges[3]);
  ball.bounceOff(edges[0]);
  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  paddle.collide(edges)
  
  if(keyDown(UP_ARROW))
  {
     paddle.y = paddle.y - 20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y = paddle.y + 20;
  }
  if(obstaclesGroup.isTouching(player)){
    player.scale = 0.2;
  }
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  ball.velocityY = random(-8,8)
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

