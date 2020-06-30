

let gridContainer = document.getElementById("gridContainer");

function initiateGrid(w, h){
    
    let x = window.prompt("Please enter the size of your grid");
    let squareSize = 540 / x;
    let root = document.documentElement;
    let num = x * x;
    
    for(let i = 0; i < num; i++ ) {
        let gridSquare = document.createElement("div");
        let size = 420 / x;
        root.style.setProperty("--columnRepeat", x);
        root.style.setProperty("--rowRepeat", x)
        root.style.setProperty("--squareHeight", squareSize + "px");
        root.style.setProperty("--squareWidth", squareSize + "px");
        gridSquare.classList.add("gridSquares");
        gridContainer.appendChild(gridSquare);
        gridSquare.onmouseover = function () {
            this.style.backgroundColor = "black";
        };
    } 
}


document.getElementById("resetButton").addEventListener("click", clearGrid);

function clearGrid() {
    
    var square = document.getElementsByClassName("gridSquares");
    var i;

    for (i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = "white";
        }

    while (gridContainer.hasChildNodes()) {  
        gridContainer.removeChild(gridContainer.firstChild);
        }

initiateGrid();

}

window.onload = initiateGrid();