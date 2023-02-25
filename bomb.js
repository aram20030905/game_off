
module.exports = class Bomb {
    random(ch){
        let found = this.chooseCell(ch);
        let result = Math.floor(Math.random()*found.length)
        return found[result];
    }
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }


            }
        }
        return found;
    }

    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = this.random(emptyCells);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 4;

            var bom = new Bomb(newX, newY);
            bombArr.push(bom);

        }
    }

    explode() {
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == 1) { 
                    matrix[y][x] = 0
                    for (var i in grassArr) {
                        if (x == grassArr[i].x && y == grassArr[i].y) {
                            grassArr.splice(i, 1);
                            this.die()
                            break;
                        }
                    }
                }

                if (matrix[y][x] == 2) {

                    matrix[y][x] = 0
                    for (var i in grassEaterArr) {
                        if (x == grassEaterArr[i].x && y == grassEaterArr[i].y) {
                            grassEaterArr.splice(i, 1);
                            this.die()
                            break;
                        }
                    }
                }

                if (matrix[y][x] == 3) {

                    matrix[y][x] = 0
                    for (var i in grassEatereatArr) {
                        if (x == grassEatereatArr[i].x && y == grassEatereatArr[i].y) {
                            grassEatereatArr.splice(i, 1);
                            this.die()
                            break;
                        }
                    }
                }
                if (matrix[y][x] == 4) {

                    matrix[y][x] = 0
                    for (var i in amenakerArr) {
                        if (x == amenakerArr[i].x && y == amenakerArr[i].y) {
                            amenakerArr.splice(i, 1);
                            this.die()
                            break;
                        }
                    }
                }
            }
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in bombArr) {
            if (this.x == bombArr[i].x && this.y == bombArr[i].y) {
                bombArr.splice(i, 1);
                break;
            }

        }
    }

}
