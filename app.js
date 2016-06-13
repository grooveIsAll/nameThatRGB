const colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
];

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
    let clickedColor = this.style.background;
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
  let titleBackground = document.querySelector("h1");
  titleBackground.style.background = color;
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}