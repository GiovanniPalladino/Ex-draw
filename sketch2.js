let dragging = false;
let offsetX = 0;
let offsetY = 0;
let ufoX = 0;
let ufoY = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
}

function draw() {
  background(0); // spazio

  // Luci ambientali
  ambientLight(40);
  directionalLight(255, 255, 255, 0, -1, -1);

  // Rotazione leggera
  
    // Calcola distanza tra mouse e centro dello schermo
  let d = dist(mouseX, mouseY, width / 2, height / 2);
  let rotationSpeed = 0.005;

  // Se il mouse è vicino all'UFO, aumenta la velocità
  if (d < 150) {
    rotationSpeed = 0.03;
  }

  // Rotazione UFO
  rotateY(frameCount * rotationSpeed);
  rotateY(frameCount * 0.005);



 // Sfere in cerchio che ruotano e cambiano colore
let numSpheres = 10;
let radius = 250;

for (let i = 0; i < numSpheres; i++) {
  let angle = map(i, 0, numSpheres, 0, TWO_PI);
  let x = cos(angle + frameCount * 0.02) * radius;
  let z = sin(angle + frameCount * 0.02) * radius;

  push();
  translate(x, 20, z);

  // Colore animato
  let r = 90 + sin(frameCount * 0.05 + i) * 75;
  let g = 250 + sin(frameCount * 0.03 + i + PI / 2) * 75;
  let b = 255;

  // Sfere che pulsano (cambiano grandezza)
  let s = map(sin(frameCount * 0.1 + i), -1, 1, 0.8, 1.2);

  ambientMaterial(r, g, b);
  scale(s);
  sphere(20, 24, 24);
  pop();
}

  


// uovo
push();

// Colore animato: varia tra tonalità blu e viola chiaro
let r = 180 + sin(frameCount * 0.05) * 40;
let g = 200 + sin(frameCount * 0.07 + PI / 3) * 30;
let b = 255;

// Lampeggio con trasparenza che pulsa
let alpha = map(sin(frameCount * 0.1), -1, 1, 80, 200);

fill(r, g, b, alpha);

scale(2.0, 4, 1.2); // schiacciata orizzontalmente
sphere(50, 100, 100);
pop();


  //LUCI DISCO
  for (let i = 0; i < 12; i++) {
    let angle = map(i, 0, 12, 0, TWO_PI);
    let x = cos(angle) * 120;
    let z = sin(angle) * 120;

    push();
    translate(x, 20, z);
    let r = abs(sin(frameCount * 0.1 + i)) * 255;
    let g = abs(sin(frameCount * 0.1 + i + 2)) * 255;
    let b = abs(sin(frameCount * 0.1 + i + 4)) * 255;
    ambientMaterial(r, g, b);
    sphere(88);
    pop();
  }

  pop(); // fine UFO
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
