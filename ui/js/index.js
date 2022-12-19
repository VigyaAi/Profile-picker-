const sendRequest = () => {
  /** TODO
   *  1) run python code
   *  2) take response
   *  3) parse response
   *  4) update ui ✅
   */

  //   4) update ui

  const response = [
    {
      serialNum: 1,
      score: 90,
      link: "example1.pdf",
    },
    {
      serialNum: 2,
      score: 80,
      link: "example2.pdf",
    },
    {
      serialNum: 3,
      score: 70,
      link: "example3.pdf",
    },
    {
      serialNum: 4,
      score: 60,
      link: "example4.pdf",
    },
    {
      serialNum: 5,
      score: 50,
      link: "example5.pdf",
    },
  ];

  response.map((item, index) => {

    const outputSelector = document.getElementById("output");
    outputSelector.insertAdjacentHTML(
      "beforeend",
      `<th class="output-serialNum">${item.serialNum}</th><th class="output-link">${item.link}</th><th class="output-score">${item.score}</th>`
    );
    console.log(item);
  });
};




// console.clear();

// let angle = 3.14/4;
// let length = 2;

// let particles = [];

// let mouseHasMoved = false;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   colorMode(HSB);
//   background(0, 0, 0);
//   noStroke();
//   angle = PI/3;
//   for (let i=0; i<500; i++) {
//     new Particle(createVector(random(width), random(height)));
//   }
// }

// function draw() {
//   if (!mouseHasMoved) {
//     for (let i=0; i<5; i++) {
//       new Particle(createVector(random(width), random(height)));
//     }
//   }
//   background(0, 0, 0, .1);
//   for (let p of particles) {
//     p.update();
//     p.draw();
//   }
// }

// function mouseMoved() {
//   mouseHasMoved = true;
//   for (let i=0; i<5; i++) {
//     new Particle(createVector(mouseX, mouseY));
//   }
// }

// class Particle {
//   constructor(pos) {
//     this.pos = pos;
//     this.vel = createVector(random(length*.5, length*1.5), 0).rotate(angle * round(random(0, 360)));
//     this.hue = random(90, 150);
//     this.sat = 100;
//     this.val = 100;
//     this.lifetime = random(50, 150);
//     this.age = 0;
//     particles.push(this);
//   }
  
//   update() {
//     if (this.age >= this.lifetime) {this.remove()}
//     this.age += 1;
//     if (this.age % 10 == 0) {
//       this.vel.rotate(random([-angle, angle]));
//     }
//     this.pos.add(this.vel);
//   }
  
//   draw() {
//     push()
//     stroke(this.hue, this.sat, this.val, 1-this.age/this.lifetime);
//     translate(this.pos.x, this.pos.y);
//     line(0, 0, -this.vel.x, -this.vel.y);
//     pop()
//   }
  
//   remove() {
//     particles.splice(particles.indexOf(this), 1);
//   }
// }
