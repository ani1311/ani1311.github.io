
var points;

let reflectXnYButton;
let reflectnXYButton;
let reflectnXnYButton;
let reflectYXButton;
let reflectnYXButton;
let reflectYnXButton;
let reflectnYnXButton;
let clearFigButton;

let translateButton;
let scaleButton;
let rotateButton;

let addPointButton;

let inputX;
let inputY;

function setup() 
{
	var canvas = createCanvas(800,800);
	var x = (windowWidth - width) / 2;
  	var y = (windowHeight - height) / 2;
  	canvas.position(x,y);
  	points = [];

  	angleMode(DEGREES);

  	//--BUTTONS SCOPE--//
  	var pos = 80;

  	reflectXnYButton = createButton('reflect x=x y=-y');
  	reflectXnYButton.position(0,pos);
	reflectXnYButton.mousePressed(reflectXnY);
	pos = pos + 20;

	reflectnXYButton = createButton('reflect x=-x y=y');
  	reflectnXYButton.position(0,pos);
	reflectnXYButton.mousePressed(reflectnXY);
	pos = pos + 20;

	reflectnXnYButton = createButton('reflect x=-x y=-y');
  	reflectnXnYButton.position(0,pos);
	reflectnXnYButton.mousePressed(reflectnXnY);
	pos = pos + 20;

	reflectYXButton = createButton('reflect x=y y=x');
  	reflectYXButton.position(0,pos);
	reflectYXButton.mousePressed(reflectYX);
	pos = pos + 20;

	reflectYnXButton = createButton('reflect x=y y=-x');
  	reflectYnXButton.position(0,pos);
	reflectYnXButton.mousePressed(reflectYnX);
	pos = pos + 20;

	reflectnYXButton = createButton('reflect x=-y y=x');
  	reflectnYXButton.position(0,pos);
	reflectnYXButton.mousePressed(reflectnYX);
	pos = pos + 20;

	reflectnYnXButton = createButton('reflect x=-y y=-x');
  	reflectnYnXButton.position(0,pos);
	reflectnYnXButton.mousePressed(reflectnYnX);
	pos = pos + 20;

	translateButton = createButton('Translate');
	translateButton.position(0,pos);
	translateButton.mousePressed(Translate);
	pos = pos + 20;

	rotateButton = createButton('Rotate');
	rotateButton.position(0,pos);
	rotateButton.mousePressed(Rotate);
	pos = pos + 20;

	scaleButton = createButton('Scale');
	scaleButton.position(0,pos);
	scaleButton.mousePressed(Scale);
	pos = pos + 20;


	clearFigButton = createButton('clear');
	clearFigButton.position(0,pos)
	clearFigButton.mousePressed(clearFig);
	pos = pos + 20;

	addPointButton = createButton('add point');
	addPointButton.position(0,pos)
	addPointButton.mousePressed(addPoint);
	pos = pos + 20;

	inputX = createInput();
    inputX.position(20, 800);

    inputY = createInput();
    inputY.position(20, 820);


}

function makeBG()
{
	background(255);
	strokeWeight(1);
	line(width/2,0,width/2,height);
	line(0,height/2,width,height/2);
}


function draw() 
{
	makeBG();
	drawFig();
}

function keyPressed()
{
	if(keyCode == 65)      // 65 == a
	{
		print(points);
	}
	if(keyCode == 66)      // 66 == b
	{
		graph.moveNode(movementIndex);
	}
	if(keyCode == 67)      // 78 == c
	{

	}
}

function mousePressed()
{
	if(mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height )
	points[points.length] = GPToCoord([mouseX,mouseY]);
}

function mouseDragged()
{

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



function drawFig()
{
	if(points.length != 0)
	{
		for(var i = 0 ; i < points.length - 1; i++)
		{
			stroke(0);
			strokeWeight(3);
			t1 = coordToGP(points[i]);
			t2 = coordToGP(points[i + 1]);
			line(t1[0],t1[1],t2[0],t2[1]);
		}
		stroke(0);
		strokeWeight(3);
		t1 = coordToGP(points[0]);
		t2 = coordToGP(points[points.length - 1]);
		line(t1[0],t1[1],t2[0],t2[1]);
	}
}

function reflectXnY()
{
	for(var i = 0 ; i < points.length ; i++)
	{
		points[i][0] = points[i][0];
		points[i][1] = -points[i][1];
	}
}

function reflectnXY()
{
	for(var i = 0 ; i < points.length ; i++)
	{
		points[i][0] = -points[i][0];
		points[i][1] = points[i][1];
	}
}

function reflectnXnY()
{
	for(var i = 0 ; i < points.length ; i++)
	{
		points[i][0] = -points[i][0];
		points[i][1] = -points[i][1];
	}
}

function reflectYX()
{
	for(var i = 0 ; i < points.length ; i++)
	{
		var temp = points[i][0];
		points[i][0] = points[i][1];
		points[i][1] = temp;
	}
}

function reflectnYX()
{
	for(var i = 0 ; i < points.length ; i++)
	{
		var temp = points[i][0];
		points[i][0] = -points[i][1];
		points[i][1] = temp;
	}
}

function reflectYnX()
{
	for(var i = 0 ; i < points.length ; i++)
	{
		var temp = points[i][0];
		points[i][0] = points[i][1];
		points[i][1] = -temp;
	}
}

function reflectnYnX()
{
	for(var i = 0 ; i < points.length ; i++)
	{
		var temp = points[i][0];
		points[i][0] = -points[i][1];
		points[i][1] = -temp;
	}
}

function Translate()
{
	var x = int(inputX.value());
	var y = int(inputY.value());

	for(var i = 0 ; i < points.length ; i++)
	{
		points[i][0] = points[i][0] + x;
		points[i][1] = points[i][1] + y;
	}
}

function Scale()
{
	var x = int(inputX.value());
	var y = int(inputY.value());

	for(var i = 0 ; i < points.length ; i++)
	{
		points[i][0] = points[i][0] * x;
		points[i][1] = points[i][1] * y;
	}
}

function Rotate()
{
	var x = int(inputX.value());

	for(var i = 0 ; i < points.length ; i++)
	{
		tx = points[i][0];
		ty = points[i][1]; 
		points[i][0] = tx*cos(x) + ty*sin(x);
		points[i][1] = -tx*sin(x) + ty*cos(x);
	}
}

function addPoint()
{
	var x = int(inputX.value());
	var y = int(inputY.value());

	points[points.length] = [x,y];
}

function clearFig()
{
	points = [];
}

