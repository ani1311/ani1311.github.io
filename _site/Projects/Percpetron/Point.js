
function f(x)
{
	return 0.3*x + 0.2;
}



function Point()
{
	this.x = random(-1,1);
	this.y = random(-1,1);
	this.lab;

	this.giveCo = function(x,y)
	{
		this.x = x;
		this.y = y;
	};

	var lineY = f(this.x);

	if(lineY < this.y)
	{
		this.lab = 1;
	}
	else
	{
		this.lab = -1;
	}

	this.show = function()
	{
		stroke(0);
		if(this.lab == 1)
		{
			fill(255);
		}
		else
		{
			fill(0);
		}
		ellipse(this.pixelX(),this.pixelY(),20,20);
	}


	this.pixelX = function()
	{
		return map(this.x,-1,1,0,width);
	}

	this.pixelY = function()
	{
		return map(this.y,-1,1,height,0);
	}
}
