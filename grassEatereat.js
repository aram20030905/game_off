var LivingCreature = require("./LivingCreature")

module.exports = class GrassEatereat extends LivingCreature {
    random(ch){
        let found = this.chooseCell(ch);
        let result = Math.floor(Math.random()*found.length)
        return found[result];
    }
   mul () {
     var emptyCells = this.chooseCell(0);
    var newCell = this.random(emptyCells);
 if(newCell){
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;
 var newGrassear = new GrassEatereat(newX, newY);
            grassEatereatArr.push(newGrassear);
            this.energy = 50;
        }
    }
move() {
        this.energy--
        var emptyCells = this.chooseCell(0);
        var newCell = this.random(emptyCells);
        if(newCell && this.energy >= 0) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0;
            this.x = newX
            this.y = newY
        } else {
            this.die()
        }
    }
eat() {
        var emptyCells = this.chooseCell(2);
        var newCell = this.random(emptyCells);
        if(newCell) {
            this.energy++
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0;
            this.x = newX
            this.y = newY
            if(this.energy > 10) {
                this.mul()
            }
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            
        } else {
            this.move()
        }
    }
die() {
        matrix[this.y][this.x] = 0;
        for (var i in grassEatereatArr) {
            if (this.x == grassEatereatArr[i].x && this.y == grassEatereatArr[i].y) {
              
                grassEatereatArr.splice(i, 1);
                break;
            }
        }
    }
}        

