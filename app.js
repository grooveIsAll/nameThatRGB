const colors = generateRandomColors(6);

let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("rgb");
let alert = document.getElementById('alert');

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
  const titleBackground = document.querySelector("h1");
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