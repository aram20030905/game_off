var express = require('express');
var app = express();
var server = require('http').createServer(app);
app.use(express.static("."));
var io = require('socket.io')(server);

app.get('/', function (req, res) {
    res.redirect('index.html');
});

server.listen(3000);


var Grass = require("./grass")
var GrassEater = require("./grassEater")
var Jur = require("./jur")
var Bomb = require("./bomb")
var Amenaker = require("./amenaker")
var GrassEatereat = require("./grassEatereat")



function generateMatrix(matLength, gr, grEa, grEaea, amen, bom, jur) {

    let matrix = [];
    for (let i = 0; i < matLength; i++) {
        matrix.push([])
        for (let j = 0; j < matLength; j++) {
            matrix[i].push(0)
        }
    }
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 1;
        }
    }
    for (let i = 0; i < grEa; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 2;
        }
    }

    for (let i = 0; i < grEaea; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 3;
        }
    }

    for (let i = 0; i < amen; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 4;
        }
    }

    for (let i = 0; i < bom; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 5;
        }

    }
    for (let i = 0; i < jur; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 6;
        }
    }
    return matrix;
}


matrix = generateMatrix(50, 10, 60, 40, 10, 20, 20);


grassArr = [];
grassEaterArr = [];
grassEatereatArr = [];
amenakerArr = [];
bombArr = [];
jurArr = [];

function startGame() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y);
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                let grEat = new GrassEater(x, y);
                grassEaterArr.push(grEat)
            }
            else if (matrix[y][x] == 3) {
                let grEateat = new GrassEatereat(x, y);
                grassEatereatArr.push(grEateat)

            }
            else if (matrix[y][x] == 4) {
                let amen = new Amenaker(x, y);
                amenakerArr.push(amen)

            }
            else if (matrix[y][x] == 5) {
                let bom = new Bomb(x, y);
                bombArr.push(bom)

            }
            else if (matrix[y[x] == 6]) {
                let jur = new Jur(x, y);
                jurArr.push(jur)
            }

        }
    }
    io.emit("send matrix", matrix)
}
startGame()
function game() {
    for (let i in grassArr) {
        grassArr[i].mul()
    }

    for (let i in grassEaterArr) {
        grassEaterArr[i].eat()
    }
    for (let i in grassEatereatArr) {
        grassEatereatArr[i].eat()
    }


    for (let i in amenakerArr) {
        amenakerArr[i].eat()
    }


    for (let i in bombArr) {
        bombArr[i].explode()
    }
    io.emit("send matrix", matrix)
}

setInterval(game, 200)