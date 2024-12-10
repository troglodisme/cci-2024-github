let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
}

function draw() {
  // background(20, 20, 20, 25); 
  

  particles.push(new Particle(mouseX, mouseY));

  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      particles.splice(i, 1);
    }
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = random(-2, 2);
    this.vy = random(-2, 2);
    this.alpha = 255;
    this.color = color(random(100, 255), random(100, 255), random(100, 255));
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 5;
  }

  finished() {
    return this.alpha < 0;
  }

  show() {
    noStroke();
    fill(red(this.color), green(this.color), blue(this.color), this.alpha);
    ellipse(this.x, this.y, 10);
  }
}