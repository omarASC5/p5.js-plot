var foo; // p5.Plot() object

var mylook = {strokecolor: [255, 0, 255], fillcolor: [0, 255, 0]};

var d = [{stuff: 50, things: 20}, {stuff: 55, things: 33}, {stuff: 33, things: 45}];
var e = [-1, 0, 10, 50, -33, 2.5, 0];

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);

	// CONSTRUCTOR:
	foo = new p5.Plot(); // easy

  //noLoop();
  background(255);

  // PLOT COMMAND:
  // LINE
  foo.plot({ type: 'point', data: d});


}

function draw() {
  background(255);
  foo.redraw();
}

function keyPressed() {
}
