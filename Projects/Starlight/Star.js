
function Star()
{
	this.x = random(0,width);
	this.y = random(0,height);
	this.z = dist(this.x,this.y,width/2,height/2)/(dist(0,0,width/2,height/2));

	var itr = 0;

	this.xold = this.x;
	this.yold = this.y;

	var RADIUS = 8;

	this.display = function()
	{
		fill(255);
		noStroke();
		ellipse(this.x,this.y,RADIUS*this.z,RADIUS*this.z);
	}

	this.update = function()
	{
		if(this.x > 0 && this.x < width && this.y > 0 && this.y < height)
		{
			this.x = this.x + 5*((this.x - width/2)/abs(width/2));
			this.y = this.y + 5*((this.y - height/2)/abs(height/2));
			this.z = dist(this.x,this.y,width/2,height/2)/(dist(0,0,width/2,height/2));


			//stroke(100);
			//line(this.x,this.y,this.xold - 30*((this.x - width/2)/abs(width/2)),this.yold - 30*((this.y - height/2)/abs(height/2)));

				this.xold = this.x;
				this.yold = this.y;
		}
		else
		{
			this.randomize();
		}
	}

	this.randomize = function()
	{
		this.x = random(0,width);
		this.y = random(0,height);
		this.z = dist(this.x,this.y,width/2,height/2)/(dist(0,0,width/2,height/2));

		this.xold = this.x;
		this.yold = this.y;

	}
}