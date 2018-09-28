
function Board()
{
	this.area = [];
	this.no = 40;
	this.side = width/this.no;
	
	for(var i = 0 ; i < this.no ; i++)
	{
		this.area[i] = [];
		for(var j = 0; j < this.no ; j++)
		{
			this.area[i][j] = random([0,1]);
		}
	}

	this.display = function()
	{
		for(var i = 0 ; i < this.no ; i++)
		{
			for(var j = 0; j < this.no ; j++)
			{
				if(this.area[i][j] == 1)
				{
					fill(0);
				}
				else
				{
					fill(255);
				}
				stroke(100);
				rect(i*this.side,j*this.side,this.side,this.side);
			
			}
		}		
	}	


	this.update = function()
	{
		var temp = [];
		for(var i = 0 ; i < this.no ; i++)
		{
			temp[i] = [];
			for(var j = 0; j < this.no ; j++)
			{
				temp[i][j] = this.area[i][j];
			}
		}

		for(var i = 0 ; i < this.no ; i++)
		{
			for(var j = 0; j < this.no ; j++)
			{

				var nbrs = 0;

				for(var p = -1 ; p <= 1; p++ )
				{
					for(var q = -1 ; q <= 1 ; q++)
					{
						try
						{
							if(typeof(this.area[i + p][j + q]) === "undefined")
							{
								continue;
							}
						}
						catch(err)
						{
							continue;
						}
						if(p == 0 && q == 0)
						{
							continue;
						}

						if(this.area[i + p][j + q] === 1)
						{
							nbrs = nbrs + 1;
						}

					}
				}

				if(nbrs < 2)
				{
					temp[i][j] = 0;
				}
				else if(nbrs >= 2 && nbrs <= 3)
				{
					if(nbrs == 3)
					{
						temp[i][j] = 1;		
					}
					continue;
				}
				else if(nbrs > 3)
				{
					temp[i][j] = 0; 
				}
			}
		}

		for(var i = 0 ; i < this.no ; i++)
		{
			for(var j = 0; j < this.no ; j++)
			{
				this.area[i][j] = temp[i][j];
			}
		}

	}

	this.makeAlive = function(i,j)
	{
		this.area[i][j]  = 1; 
	}

	this.getIJ = function(x,y)
	{
		return [int(x/this.side),int(y/this.side)];
	}
}