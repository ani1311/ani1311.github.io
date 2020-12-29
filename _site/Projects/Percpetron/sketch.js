var brain;
var points = [];
var N = 100;

function setup() {
  // put setup code here
  var canvas = createCanvas(600,600);
  canvas.parent('sketch-holder');
  brain = new Perceptron();

  for(var i = 0; i < N;i++)
  {
  	points[i] = new Point();
  	points[i].show();
  }

}

function draw() {
  // put drawing code here
  background(255);
  //line(0,height,width,0);
  var p1 = new Point();
  var p2 = new Point();
  p1.giveCo(-1,f(-1));
  p2.giveCo(1,f(1));
  stroke(0);
  line(p1.pixelX(),p1.pixelY(),p2.pixelX(),p2.pixelY());


  var p3 = new Point();
  var p4 = new Point();
  p3.giveCo(-1,brain.guessY(-1));
  p4.giveCo(1,brain.guessY(1));
  stroke(0);
  line(p3.pixelX(),p3.pixelY(),p4.pixelX(),p4.pixelY());


  for(var i = 0; i < N;i++)
  {
  	points[i].show();
  }

  for(var i = 0; i < N;i++)
  {
  	var inputs = [points[i].x,points[i].y,1];
  	brain.train(inputs,points[i].lab);

  	var guess = brain.guess(inputs);

  	if(guess == points[i].lab)
  	{
  		fill(0,255,0);
  	}
  	else
  	{
  		fill(255,0,0);
  	}
  	noStroke();
  	ellipse(points[i].pixelX(),points[i].pixelY(),10,10);



  }

}

function mousePressed()
{
	var p = new Point()
	var x = map(mouseX,0,width,-1,1);
	var y = map(mouseY,height,0,-1,1);
	print(x,y);
	p.giveCo(x,y);
	points[N] = p;

	N = N + 1;
}