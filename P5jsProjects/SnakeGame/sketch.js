
var board;


function setup() {

	var canvas = createCanvas(600,600);
  canvas.parent('sketch-holder');
	board = new Board();
	frameRate(10);

}

function draw() {

	background(200);
	board.update();
  board.display();
  	
}

function mousePressed()
{
	board.snake.alive = true;	
	board.snake.reset();
}


function keyPressed()
{
	if (keyCode === LEFT_ARROW) 
	{
    	board.snake.velLeft();
  	} 
  	else if (keyCode === RIGHT_ARROW) 
  	{
    	board.snake.velRight();
  	}
  	else if (keyCode === UP_ARROW) 
  	{
    	board.snake.velUp();
  	}
  	else if (keyCode === DOWN_ARROW) 
  	{
    	board.snake.velDown();
  	}
}