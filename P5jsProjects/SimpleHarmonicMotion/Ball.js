


function Ball(x,i)
{
	var Gravity = 0.1;

	this.x = x;
	this.y = height/2;

	this.xVel = 0;
	this.yVel = 0;

	this.mass = 10;
	this.density = 7;

	this.xAcc = 0;
	this.yAcc = Gravity;

	this.rad = (width/20)*map(i,0,20,0.5,1);



	this.display = function()
	{
		fill(0);
		stroke(0);
		strokeWeight(3);
		ellipse(this.x,this.y,this.rad,this.rad);
	}

	this.update = function(t)
	{
		this.y = 300 + 100*sin((t)/20) + 100*cos(t/45);
	}

	this.applyForce = function(val)
	{
		this.xAcc = this.xAcc + val/this.mass;
	}


}