
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

	frameRate(10);
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
		scanLineStep(scanLineStart,grid);
	}
}

function keyPressed()
{
	if(keyCode == 65)      // 65 == a
	{
		filling = !filling;
	}
	if(keyCode == 66)      // 65 == a
	{
		grid.makeLines();
	}
	if(keyCode == 67)      // 78 == c
	{
		grid.clear();
	}
}

function mousePressed()
{
	grid.addPoint(mouseX,mouseY);
	print(grid.getIJ(mouseX,mouseY));
}

















//---------FUNCTIONS-----------///
function scanLineStep(pos,grid)
{
	i = pos[0];
	j = pos[1];

	if(i + 1 == grid.no)
	{
		i = 0;
		j = j + 1;
		if(grid.horizontalLines[j] == true)
		{
			j = j + 1;
		}
	}
	else
	{
		i = i + 1;
	}

	if(grid.area[i][j] == 0 && slFlag)
	{
		grid.area[i][j] = 1;
	}	

	else if(grid.area[i][j] == 1)
	{
		slFlag = !slFlag;
	}

	pos[0] = i;
	pos[1] = j;
}



