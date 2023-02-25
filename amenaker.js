var LivingCreature = require("./LivingCreature")

module.exports = class Amenaker extends LivingCreature{
    constructor(x,y){
        super(x,y)
        this.energy = 50
    }
    random(ch){
        let found = this.chooseCell(ch);
        let result = Math.floor(Math.random()*found.length)
        return found[result];
    }
    randomInt(min, max) {
        return min + Math.floor(Math.random() * (max - min + 1));
    }
   mul () {
         var newCell = this.random(0);
  
         if(newCell){
             var newX = newCell[0];
             var newY = newCell[1];
             matrix[newY][newX] = 2;
  
             var amenaker = new Amenaker(newX, newY);
             amenakerArr.push(amenaker);
             this.energy = 15;
         }
     }
 move() {
         this.energy--
         var newCell = this.random(0);
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
        let cells = [this.random(1),this.random(2),this.random(3)];
        let int = this.randomInt(0, 2)

         var newCell = cells[int]
         //console.log(newCell)
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
             for (var i in grassArr) {
                 if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                     break;
                 }
             }
             for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                   grassEaterArr.splice(i, 1);
                    break;
                }
            }
            for (var i in grassEatereatArr) {
                if (newX == grassEatereatArr[i].x && newY == grassEatereatArr[i].y) {
                   grassEatereatArr.splice(i, 1);
                    break;
                }
            }
             
         } else {
             this.move()
         }
     }
    die() {
         matrix[this.y][this.x] = 0;
         for (var i in amenakerArr) {
             if (this.x == amenakerArr[i].x && this.y == amenakerArr[i].y) {
               
                 amenakerArr.splice(i, 1);
                 break;
             }
         }
     }
 }        