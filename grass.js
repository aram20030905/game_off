var LivingCreature = require("./LivingCreature")
module.exports = class Grass extends LivingCreature {
  random() {
    let found = this.chooseCell(0);
    let result = Math.floor(Math.random() * found.length)
    return found[result];
  }
  mul() {
    this.multiply++;
    var emptyCells = this.chooseCell(0);
    var newCell = this.random(emptyCells);
    if (newCell && this.multiply >= 8) {
      var newX = newCell[0];
      var newY = newCell[1];
      matrix[newY][newX] = 1;
      var newGrass = new Grass(newX, newY);
      grassArr.push(newGrass);
      this.multiply = 0;
    }
  }
}


