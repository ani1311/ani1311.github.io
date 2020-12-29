var stars = [];
var starsNo = 100;

function setup() {
  // put setup code here
  var canvas = createCanvas(600,600);
  canvas.parent('sketch-holder');
  for(var i=0;i<starsNo;i++)
  {
  	stars[i] = new Star();
  }
}

function draw() {
  background(0);
  for(var i=0;i<starsNo;i++)
  {
  	stars[i].update();
  	stars[i].display();
  }
}