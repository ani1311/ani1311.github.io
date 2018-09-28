
function sign(x)
{
	if(x >= 0)
	{
		return 1;
	}
	else
	{
		return -1;
	}
}


function Perceptron()
{
	this.weights = [random(-1,1),random(-1,1),random(-1,1)];
	this.lr = 0.00004;

	this.guess = function(inputs)
	{
		var sum = 0;
		sum = sum + inputs[1]*this.weights[1] + inputs[0]*this.weights[0] + this.weights[2];
		var output = sign(sum);
		return output;
	}

	this.train = function(inputs,target)
	{
		var guess = this.guess(inputs);
		var error = target - guess;

		for(var i = 0; i < 3;i++)
		{
			this.weights[i] = this.weights[i] + error*inputs[i]*this.lr;
		}
	}

	this.guessY = function(x)
	{
		var w0 = this.weights[0];
		var w1 = this.weights[1];
		var w2 = this.weights[2];

		return (-(w0/w1)*x - w2/w1);

	}
}