


function Grid()
{
	this.area = [];
	this.side = 40;
	this.no = width/this.side;
	this.horizontalLines = [];
	for(var i = 0 ; i < this.no ; i++)
	{
		this.horizontalLines[this.horizontalLines.length] = false;
	}
	// this.points = [[3,3],[3,12],[9,12],[9,3]];
	this.points = [];

	for(var i = 0 ; i < this.no ; i++)
	{
		this.area[i] = [];
		for(var j = 0 ; j < this.no ; j++)
		{
			this.area[i][j] = 0;
		}
	}

	this.display = function()
	{
		for(var i = 0 ; i < this.no ; i++)
		{
			for(var j = 0 ; j < this.no ; j++)
			{
				stroke(0);
				strokeWeight(2);

				if(this.area[i][j] == 1)
				{
					fill(50);
				}
				else
				{
					fill(255);
				}

				rect(i*this.side,j*this.side,this.side,this.side);
			}
		}
	}

	this.getIJ = function(x,y)
	{
		if(x > 0 && x < width && y > 0 && y < width)
		{
			return [int(x/this.side),int(y/this.side)];
		}
	}

	this.addPoint = function(x,y)
	{
		t = this.getIJ(x,y);
		this.points[this.points.length] = [t[0],t[1]];
		this.area[t[0]][t[1]] = 1; 
	}


	this.fillTile = function(i,j)
	{
		this.area[i][j] = 1;
	}

	this.clear = function()
	{
		for(var i = 0 ; i < this.no ; i++)
		{
			for(var j = 0 ; j < this.no ; j++)
			{
				this.area[i][j] = 0;
			}
		}
	}

	this.makeLines = function()
	{
		for(var i = 0 ; i < this.points.length - 1; i++)
		{
			var x0 = this.points[i][0];
			var y0 = this.points[i][1];
			var x1 = this.points[i + 1][0];
			var y1 = this.points[i + 1][1];

			var dx = x1 - x0;
			var dy = y1 - y0;

			var step = max(abs(dx),abs(dy));
			print(step);
			var xStep = dx/step;
			var yStep = dy/step;

			print(step);

			if(dx == 0)
			{
				this.horizontalLines[this.points[i][1]] = true;
			}

			x = x0;
			y = y0;

			for(var j = 0 ; j <= step ; j++)
			{
				this.area[round(x)][round(y)] = 1;
				x = x + xStep;
				y = y + yStep;
			}
		}

		var x0 = this.points[this.points.length - 1][0];
		var y0 = this.points[this.points.length - 1][1];
		var x1 = this.points[0][0];
		var y1 = this.points[0][1];

		var dx = x1 - x0;
		var dy = y1 - y0;

		var step = max(abs(dx),abs(dy));
		var xStep = dx/step;
		var yStep = dy/step;

		print(step);

		if(dx == 0)
		{
			this.horizontalLines[this.points[i][1]] = true;
		}

		x = x0;
		y = y0;

		for(var j = 0 ; j <= step ; j++)
		{
			this.area[round(x)][round(y)] = 1;
			x = x + xStep;
			y = y + yStep;
		}


	}

}



function round(x)
{
	if(x <= 0.5)
	{
		return int(x);
	}
	else
	{
		return (int(x) + 1);
	}
}

