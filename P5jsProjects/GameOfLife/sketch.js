
var board;
var update = false;

function setup() 
{
	var canvas = createCanvas(600,600);
	canvas.parent('sketch-holder');

	board = new Board();
	frameRate(5);
}

function draw() 
{
	board.display();
	if(update)
	{
		board.update();
	}
}


function mouseDragged()
{
	// var t = board.getIJ(mouseX,mouseY);
	// board.makeAlive(t[0],t[1]);
}

function mousePressed()
{
	var t = board.getIJ(mouseX,mouseY);
	board.makeAlive(t[0],t[1]);
}


function keyPressed()
{

	if(keyCode === LEFT_ARROW)
	{
		update = ! update; 
	}

	else if(keyCode === RIGHT_ARROW)
	{

	}

	else if(keyCode === UP_ARROW)
	{

	}

	else if(keyCode === DOWN_ARROW)
	{

	}
}