let data;
let selector;
let slider;

function setup() {
  createCanvas(400, 400);
  
  data = {
    "Eye Contact": 23,
    "Cried": 2,
    "Hugs": 15,
    "Sewing Thoughts": 8,
    "Liked Others' Items": 12
  };
  
  // Dropdown
  selector = createSelect();
  selector.position(10, 10);
  for (let key in data) {
    selector.option(key);
  }
  
  // Slider (controls how many appear)
  slider = createSlider(0, 23, 10);
  slider.position(10, 40);
}

function draw() {
  background(245);
  
  let choice = selector.value();
  let maxAmount = data[choice];
  let amount = min(slider.value(), maxAmount);
  
  // Title
  fill(0);
  textSize(14);
  text(choice + ": " + amount + " / " + maxAmount, 10, 80);
  
  // Draw shapes in a loose grid
  for (let i = 0; i < amount; i++) {
    let x = 60 + (i % 6) * 50;
    let y = 120 + floor(i / 6) * 50;
    
    drawShape(choice, x, y);
  }
}

// Different visuals for each data type
function drawShape(type, x, y) {
  push();
  translate(x, y);
  
  if (type === "Eye Contact") {
    fill(255);
    ellipse(0, 0, 30, 20);
    fill(0);
    ellipse(0, 0, 6, 6);
    
  } else if (type === "Cried") {
    fill(100, 150, 255);
    ellipse(0, 0, 10, 20); // tear
    
  } else if (type === "Hugs") {
    fill(255, 150, 150);
    ellipse(0, 0, 20, 20); // soft circle (warmth)
    
  } else if (type === "Sewing Thoughts") {
    fill(200);
    rect(-5, -5, 10, 10); // simple square (idea/block)
    
  } else if (type === "Liked Others' Items") {
    fill(255, 200, 0);
    triangle(-8, 8, 8, 8, 0, -8); // spark/inspiration
  }
  
  pop();
}