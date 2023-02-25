var LivingCreature = require("./LivingCreature")

module.exports = class GrassEater extends LivingCreature{
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
            matrix[newY][newX] = 2;
 
            var newGrass = new GrassEater(newX, newY);
            grassEaterArr.push(newGrass);
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
     
        var emptyCells = this.chooseCell(1);
        var newCell = this.random(emptyCells);
       
        
        if(newCell) {

            this.energy++
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0;
            this.x = newX
            this.y = newY
            if(this.energy > 12) {
                this.mul()
            }
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            
        } else {
            console.log("eat");

            this.move()
        }
    }
die() {
        matrix[this.y][this.x] = 0;
        for (var i in grassEaterArr) {
            if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1);
                break;
            }
        }
    }
}