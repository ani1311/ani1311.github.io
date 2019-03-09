
var grid;
var scanLineStart = [0,0];
var filling = false;
var slFlag = false;

function setup() 
{
	var canvas = createCanvas(800,800);
	var x = (windowWidth - width) / 2;
  	var y = (windowHeight - height) / 2;
  	canvas.position(x,y);

	grid = new Grid();

	frameRate(5);
}



function draw() 
{
	background(0);
	grid.display();
	fill(0,0,255);
	rect(scanLineStart[0]*grid.side,scanLineStart[1]*grid.side,grid.side,grid.side);
	// print(scanLineStart[0]*grid.side,scanLineStart[1]*grid.side,grid.side,grid.side);
	// noLoop();
	if(filling)
	{
		scanLineStep(scanLineStart,grid,slFlag);
	}
}

function keyPressed()
{
	if(keyCode == 65)      // 65 == a
	{
		filling = !filling;
	}
	if(keyCode == 66)      // 66 == b
	{
		graph.moveNode(movementIndex);
	}
	if(keyCode == 67)      // 78 == c
	{
		grid.clear();
	}
}

function mousePressed()
{
	t = grid.getIJ(mouseX,mouseY);
	grid.fillTile(t[0],t[1]);
}

function mouseDragged()
{
	t = grid.getIJ(mouseX,mouseY);
	grid.fillTile(t[0],t[1]);	
}
















//---------FUNCTIONS-----------///
function coordToGP(t)
{
	X = t[0] + width/2;
	Y = -t[1] + height/2;
	return [X,Y];
}

function GPToCoord(t)
{
	X = t[0] - width/2;
	Y = t[1] - height/2;
	return [X,-Y];
}



