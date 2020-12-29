

var board;

function setup() 
{
	var canvas = createCanvas(600,600);
	canvas.parent('sketch-holder');
	board =  new Board();
}

function draw() 
{
	board.display();
}


function mouseDragged()
{
	fill(255,0,0);
	noStroke();
	ellipse(mouseX,mouseY,10,10);
}

function mousePressed()
{
	var t = board.getij(mouseX,mouseY);
	board.eval(t[0],t[1]);
}


function keyPressed()
{

	if(keyCode === LEFT_ARROW)
	{
		board.displayAll();
	}

	else if(keyCode === RIGHT_ARROW)
	{
		board.solveOne();
	}

	else if(keyCode === UP_ARROW)
	{
		print(board.getij(mouseX,mouseY));
	}

	else if(keyCode === DOWN_ARROW)
	{

	}
}