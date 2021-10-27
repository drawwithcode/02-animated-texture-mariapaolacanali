function setup() {
  createCanvas(windowWidth, windowHeight);

  noStroke();
  background("Pink");
  frameRate(12);
}

function draw() {
  //create a grid of flowers
  //define the grid in terms of number of columns and rows
  const columns = 30;
  const rows = 20;
  //define the size of the cell
  const cellWidth = width / columns;
  const cellHeight = height / rows;

  for (let c = 0; c < columns; c++) {
    for (let r = 0; r < rows; r++) {
      //calculate x and y
      //use the size of the cell to calculate where in the grid my flower will show up
      const x = c * cellWidth + cellWidth / 2;
      const y = r * cellHeight + cellHeight / 2;

      //rect(x, y, cellWidth, cellHeight);

      drawFlower(x, y, min(cellWidth, cellHeight));
    }
  }
}
//1st define the function drawFlower
function drawFlower(x, y, size) {
  //use a random size to make all my flowers look different
  const flowerSize = random(size * 0.4, size * 0.7);
  const petalSize = flowerSize / 2;
  //spacing = petal distance
  const spacing = petalSize / 2;

  let xs = x - spacing;
  let sx = x + spacing;
  let ys = y - spacing;
  let sy = y + spacing;

  fill(random(255), random(255), random(255));
  // upper-left petal
  circle(xs, ys, petalSize);
  // upper-right petal
  circle(sx, ys, petalSize);
  // bottom-left petal
  circle(xs, sy, petalSize);
  // bottom-right petal
  circle(sx, sy, petalSize);

  //centre flower
  fill("orange");
  circle(x, y, petalSize / 1.5);
}
