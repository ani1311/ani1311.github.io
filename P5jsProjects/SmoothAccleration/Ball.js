function Ball() {

	this.pos = createVector(random(0,width),random(0,height));
	this.vel = createVector(0,0);
	this.acc = createVector(0,0);
	this.rad = 10;

	var multi = 0.5;

	this.display = function()
	{
		fill(0);
		ellipse(this.pos.x,this.pos.y,this.rad,this.rad);
		//strokeWeight(5);
		//line(mouseX,mouseY,this.pos.x,this.pos.y);
	}

	this.moveTowardsMouse = function()
	{
		var mouse = createVector(mouseX,mouseY);
		var dist = ((mouse.sub(this.pos)).normalize());
		this.acc = dist.mult(multi);

		this.vel = this.vel.add(this.acc); 
		this.pos = this.pos.add(this.vel);

		this.vel = this.vel.mult(0.997); 

		//print(this.acc,dist);
	}

	this.moveSlower = function()
	{
		multi = multi - 0.1;
	}

	this.moveFaster = function()
	{
		multi = multi + 0.1;
	}

	this.goToMouse = function()
	{
		this.pos.x = mouseX;
		this.pos.y = mouseY;
	}

}