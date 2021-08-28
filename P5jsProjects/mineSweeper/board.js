

function Board()
{
	this.no = 10;
	this.boxWidth = width/this.no;
	this.boxHeight = height/this.no;
	this.gameOn = true;

	this.area = [];

	for(var i = 0 ; i < this.no ; i++)
	{
		this.area[i] = [];
		for(var j = 0 ; j < this.no ; j++)
		{
			this.area[i][j] = [];
			this.area[i][j][0] = false;  //////// 0 - display   1 - no of bombs 2 - bomb val
			this.area[i][j][1] = 0;     // i,j,1 -1 implies bomb
			this.area[i][j][2] = false; //bomb explored
			if(random() < 0.1)
			{
				this.area[i][j][1] = -1;
			}
		}
	}

	for(var i = 0 ; i < this.no ; i++)
	{
		for(var j = 0 ; j < this.no ; j++)
		{
			var t = 0;
			if(this.area[i][j][1] == -1)
			{
				continue;
			}
			for(var p = -1 ; p < 2;p++)
			{
				for(var q = -1 ; q < 2;q++)
				{
					try
					{
						this.area[i + p][j + q][1];
					}
					catch(err)
					{
						continue;
					}
					// print(i + p,j + q);
					if(this.area[i + p][j + q][1] == -1)
					{
						t = t + 1;
					}
				}
			}
			this.area[i][j][1] = t;
		}
	}


	this.display = function()
	{
		for(var i = 0 ; i < this.no ; i++)
		{
			for(var j = 0 ; j < this.no ; j++)
			{
				if(this.area[i][j][0])
				{
					if(this.area[i][j][1] === -1)
					{
						fill(200,0,0);
					}
					else
					{
						fill(255);
					}
					stroke(0);
					strokeWeight(8);
					rect(i*this.boxWidth,j*this.boxHeight,this.boxWidth,this.boxHeight);				
					
					if(this.area[i][j][1] != 0)
					{

						fill(0);
						strokeWeight(1);
						textSize(this.boxWidth/2);
						textAlign(CENTER);
						text(this.area[i][j][1],(i + 0.5)*this.boxWidth,(j + 0.5)*this.boxHeight);
					}
				}

				else
				{
					if(this.area[i][j][2])
					{
						fill(255,0,0);
					}
					else
					{
						fill(100);
					}
					stroke(0);
					strokeWeight(8);
					rect(i*this.boxWidth,j*this.boxHeight,this.boxWidth,this.boxHeight);
				}
			}
		}
	}

	this.displayAll = function()
	{
		for(var i = 0 ; i < this.no ; i++)
		{
			for(var j = 0 ; j < this.no ; j++)
			{
				this.area[i][j][0] = true;
			}
		}
	}


	this.eval = function(i,j)
	{
		this.area[i][j][0] = true;
		if(this.gameOn == false)
		{
			print("GameOver");
			return ;
		}

		if(this.area[i][j][1] == -1)
		{
			this.gameOn = false;
			return ;
		}

		if(this.area[i][j][1] == 0)
		{
			for(var p = -1 ; p < 2;p++)
			{
				for(var q = -1 ; q < 2;q++)
				{
					try
					{
						this.area[i + p][j + q][1];
					}
					catch(err)
					{
						continue;
					}
					if(this.area[i + p][j + q][0] == false)
					{
						this.eval(i + p,j + q);
					}
				}
			}
		}
	}

	this.getij = function(x,y)
	{
		return [int(x/this.boxWidth),int(y/this.boxHeight)];
	}

 	this.solveOne = function()
 	{
 		if(this.gameOn == false)
		{
			print("GameOver");
			fill(0,100,100);
			strokeWeight(15);
			textSize(width/10);
			textAlign(CENTER);
			text("Over",0 + width/2,0 + height/2);
			noLoop();
			return ;
		}
 		var s = true;
 		//--------GET BOMBS-------------
 		for(var i = 0 ; i < this.no ; i++)
		{
			for(var j = 0 ; j < this.no ; j++)
			{
				var t = 0;
				if(this.area[i][j][0] == false)
				{
					continue;
				}
				for(var p = -1 ; p < 2;p++)
				{
					for(var q = -1 ; q < 2;q++)
					{
						try
						{
							this.area[i + p][j + q][1];
						}
						catch(err)
						{
							continue;
						}
						if(p == 0 && q == 0)
						{
							continue;
						}
						if(this.area[i + p][j + q][0] == false)
						{
							t = t + 1;
						}
					}
				}
				if(t == this.area[i][j][1] && t != 0)
				{
					// print(i,j);
					for(var p = -1 ; p < 2;p++)
					{
						for(var q = -1 ; q < 2;q++)
						{
							try
							{
								this.area[i + p][j + q][1];
							}
							catch(err)
							{
								continue;
							}
							if(p == 0 && q == 0)
							{
								continue;
							}
							if(this.area[i + p][j + q][0] == false)
							{
								this.area[i + p][j + q][2] = true;
							}
						}
					}
				}
			}
		}
		//-----EXPLORE SPACE---------
		for(var i = 0 ; i < this.no ; i++)
		{
			for(var j = 0 ; j < this.no ; j++)
			{
				var t = 0;
				var r = 0;
				if(this.area[i][j][0] == false)
				{
					continue;
				}
				for(var p = -1 ; p < 2;p++)
				{
					for(var q = -1 ; q < 2;q++)
					{
						try
						{
							this.area[i + p][j + q][1];
						}
						catch(err)
						{
							continue;
						}
						if(p == 0 && q == 0)
						{
							continue;
						}
						if(this.area[i + p][j + q][2] == true)
						{
							t = t + 1;
						}
						if(this.area[i + p][j + q][0] == false)
						{
							r = r + 1;
						}
					}
				}
				if(t == this.area[i][j][1] && t < r)
				{
					for(var p = -1 ; p < 2;p++)
					{
						for(var q = -1 ; q < 2;q++)
						{
							try
							{
								this.area[i + p][j + q][1];
							}
							catch(err)
							{
								continue;
							}
							if(p == 0 && q == 0)
							{
								continue;
							}
							if(this.area[i + p][j + q][0] == false && this.area[i + p][j + q][2] == false)
							{
								this.eval(i + p,j + q);
								s = false;
								break;
							}
						}
					}
				}
			}
		}
		if(s)
		{
			var t = [];
			for(var i = 0 ; i < this.no ; i++)
			{
				for(var j = 0 ; j < this.no ; j++)
				{
					if(this.area[i][j][0] == false && this.area[i][j][2] == false)
					{
						t.push([i,j]);
					}
				}
			}

			if(t.length == 0)
			{
				print("You Won");
				fill(0,100,200);
				strokeWeight(5);
				textSize(width/10);
				textAlign(CENTER);
				text("Victory",0 + width/2,0 + height/2);
				noLoop();
				return;
			}

			var k = random(t);
			this.eval(k[0],k[1]);
		}
	}

	// this.solveIJ = function(i,j)
	// {

	// }
}