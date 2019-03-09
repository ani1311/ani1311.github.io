


function Grid()
{
	this.area = [];
	this.side = 40;
	this.no = width/this.side;

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
}

function scanLineStep(pos,grid,flag)
{
	i = pos[0];
	j = pos[1];

	if(i + 1 == grid.no)
	{
		i = 0;
		j = j + 1;
	}
	else
	{
		i = i + 1;
	}

	if(grid.area[i][j] == 0 && flag)
	{
		grid.area[i][j] = 1;	
	}

	else if(grid.area[i][j] == 1)
	{
		flag = !flag;
	}

	pos[0] = i;
	pos[1] = j;
}

