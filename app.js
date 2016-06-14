const titleBackground = document.querySelector("h1");
const modeButtons = document.querySelectorAll(".mode");

let numColors = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("rgb");
let alert = document.getElementById('alert');
let resetButton = document.getElementById("option");

init();

function init() {
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  // run modeButton Listeners
  for(let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numColors = 3 : numColors = 6;
      reset();
    });  
  }
}

function setupSquares() {
  // setup squares
  for(let i = 0; i < squares.length; i++) {
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
}

function reset() {
  colors = generateRandomColors(numColors);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  for(let i = 0; i < squares.length; i++) {
    if(colors[i]) {
    squares[i].style.display = "block";
    squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  resetButton.textContent = "New Colors";
  titleBackground.style.background = "steelblue";
  alert.textContent = "";
}

resetButton.addEventListener("click", function() {
  reset();
});

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