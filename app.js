const titleBackground = document.querySelector("h1");
const easyBtn = document.getElementById("easy");
const hardBtn = document.getElementById("hard");

let numColors = 6;
let colors = generateRandomColors(numColors);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("rgb");
let alert = document.getElementById('alert');
let resetButton = document.getElementById("option");

easyBtn.addEventListener("click", function() {
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numColors = 3;
  colors = generateRandomColors(numColors);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  for(let i = 0; i < squares.length; i++) {
    if(colors[i]) {
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function() {
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numColors = 6;
  colors = generateRandomColors(numColors);
  pickedColor = pickColor()  ;
  colorDisplay.textContent = pickedColor;

  for(let i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].style.display = "block";
  }
});

resetButton.addEventListener("click", function() {
  colors = generateRandomColors(numColors);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  for(let i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
  titleBackground.style.background = "#232323";
});

colorDisplay.textContent = pickedColor;

for(let i = 0; i < squares.length; i++) {
  // add colors to squares
  squares[i].style.background = colors[i];
  // add 'click' listeners to squares
  squares[i].addEventListener("click", function() {
    const clickedColor = this.style.background;
    if(clickedColor === pickedColor) {
      alert.textContent = "Correct!";
      changeColors(clickedColor);
      resetButton.textContent = "Play Again?";
    } else {
      this.style.background = "#232323";
      alert.textContent = "Try Again";
    }
  });
}

function changeColors(color) {
  for(let i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
  titleBackground.style.background = color;
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  let colorsArray = [];

  for(let i = 0; i < num; i++) {
    colorsArray.push(randomColor());
  }

  return colorsArray;
}

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}