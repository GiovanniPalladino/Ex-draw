
/*
 * @name Kaleidoscope
 * @/*arialabel User draws thick black lines on the grey background and it is mirrored 5 times in a circle like a kaleidoscope
 * @description A kaleidoscope is an optical instrument with two or more reflecting surfaces tilted to each other in an angle. This example tries to replicate the behavior of a kaleidoscope. Set the number of reflections at the symmetry variable and start drawing on the screen. Paste the below code in the <a href="https://editor.p5js.org/"> Editor </a> and click on the save button if you wish to download a .jpg file of the art that you have created.
 */
// Symmetry corresponding to the number of reflections. Change the number for different number of reflections 
let symmetry = 5;   

let angle = 360 / symmetry;
let saveButton, clearButton, mouseButton, keyboardButton, changeColorButton;
let slider;
let penColor;

function setup() { 
  createCanvas(windowWidth, windowHeight - 50);
  angleMode(DEGREES);
  background(255);
  penColor = color(0);

  function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  
}

  // Creating the save button for the file
  saveButton = createButton('save');
  saveButton.mousePressed(saveFile);

  // Creating the clear screen button
  clearButton = createButton('clear');
  clearButton.mousePressed(clearScreen);

  // Setting up the slider for the thickness of the brush
  brushSizeSlider = createButton('Brush Size Slider');
  sizeSlider = createSlider(1, 32, 4, 0.1);


// Setting up the slider for the color of the brush
  changeColorButton = createButton('Change color');
  changeColorButton.mousePressed(changeColor);
  
}

// Save File Function
function saveFile() {
  save('design.jpg');
}

// Clear Screen function
function clearScreen() {
  background(255);
}


// Funzione per cambiare il colore del pennarello
function changeColor() {
  penColor = random([color(255, 0, 0), color(0, 255, 255), color(0, 0, 255)]);


}

function draw() {
  translate(width / 2, height / 2);

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX - width / 2;
    let pmy = pmouseY - height / 2;
    
    if (mouseX) {
      for (let i = 0; i < symmetry; i++) {
        rotate(angle);
        let sw = sizeSlider.value();
        stroke(penColor);
        strokeWeight(sw);
        line(mx, my, pmx, pmy);
        push();
        scale(1, -1);
        line(mx, my, pmx, pmy);
        pop();
      }
    }
  }
}
