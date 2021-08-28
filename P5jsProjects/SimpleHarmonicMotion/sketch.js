
var ball = [];
var t;

function setup() {

	var canvas = createCanvas(600,600);
	canvas.parent('sketch-holder');
	t = 0;

	for(var i = 0; i < 20;i++)
	{
		ball[i] = new Ball(i*(width/20),i);
	}

}

function draw() {
	background(255);
	for(var i = 0; i < 20;i++)
	{	
		ball[i].update(t + i*4);
		ball[i].display();
	}
	t = t + 1;
}




function mousePressed()
{
}

function keyPressed()
{
}