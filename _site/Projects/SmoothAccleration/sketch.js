var balls = [];

var n = 10;





function setup() {
  var canvas = createCanvas(600,600);
  canvas.parent('sketch-holder');

  for(var i = 0 ; i < n;i++ )
  {
  	balls[i] = new Ball();
  }

  // ball = new Ball();
}

function draw() {
  background(0,255,0);

  // ball.moveTowardsMouse();
  // ball.display();

  for(var i = 0 ; i < n;i++ )
  {
  	balls[i].moveTowardsMouse();
  	balls[i].display();
  }
}


function mousePressed()
{
	//ball.moveTowardsMouse();

	for(var i = 0 ; i < n;i++ )
	{
		balls[i].goToMouse();
	}
	print("toMOuse");

}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		for(var i = 0 ; i < n;i++ )
		{
			balls[i].moveFaster();
		}
		print("faster");
	}

	if(keyCode === DOWN_ARROW)
	{
		for(var i = 0 ; i < n;i++ )
		{
			balls[i].moveSlower();
		}
		print("slower");
	}
}