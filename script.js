
var socket = io()
var side = 50;


function setup() {
    frameRate(5);
    createCanvas(50 * side, 50 * side);
    background('#acacac');
}

function draw2(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("grey");
            } else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("blue");
            }
            else if (matrix[y][x] == 4) {
                fill("red");
            }
            else if (matrix[y][x] == 5) {
                fill("orange");
            }
            else if (matrix[y][x] == 6) {
                fill("aqua");
            }

            rect(x * side, y * side, side, side, side);


        }
    }
}



socket.on("send matrix",draw2)


let d=document.getElementById("a1");
let c=document.getElementById("a2");
let e=document.getElementById("a3");
let n=document.getElementById("a4");

function dzmer(){
  
}
function garun(){
  
}

function amar(){
  
}
function ashun(){
  
}
d.addEventListener(dzmer,"click")
c.addEventListener(garun,"click")
e.addEventListener(amar,"click")
n.addEventListener(dzmer,"click")




