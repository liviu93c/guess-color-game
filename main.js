var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setUpModeButtons();
    setUpSquare();
    reset();
}

function setUpModeButtons (){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function (){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        });
      }
}

function setUpSquare () {
    for (var i = 0; i < squares.length; i++) {    
        //click listeners to squares
        squares[i].addEventListener("click", function(){
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if (clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.background = clickedColor;
                } else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again"
                }
        });
      }
}

function reset(){
    colors = generateRandomColors(numSquares); 
    //pick new random color from arr
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New colors";
    messageDisplay.textContent = "";
    //generate colors of square
    for (var i = 0; i < squares.length; i++){
            if(colors[i]){
            squares[i].style.display ="block";
            squares[i].style.background = colors[i];
            } else {
            squares[i].style.display = "none";
        }
    }
        h1.style.background = "#steelblue";
}


resetButton.addEventListener("click", function(){
    reset();
})

function changeColors(color){
    // loop though all square
    for(var i = 0; i < squares.length; i++){
        // change each color to match given color
        squares[i].style.background = color;
    }
}

function pickColor(){
 var random = Math.floor(Math.random() * colors.length);
 return colors[random]; 
}

function generateRandomColors(num){
    //make an array
    var arr = []
    //repeat num times
    for(var i = 0; i < num; i++){
     //getrandom color and push intro arr
        arr.push(randomColor())
    }
    //return that arr
    return arr;
}

function randomColor() {
    // pick a red from 0-255
    var r = Math.floor(Math.random() * 256);
    // pick a green from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a blue from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b +")";
}
