// Ханойская башня:
// за раз перемещается только 1 кольцо,
// переместить кольцо можно только с вершины на вершину,
// нельзя класть кольцо большего размера на меньшее.

function move(count, fromPeg, toPeg, medianPeg) {
  if (count == 0) {
    return null;
  }
  move(count - 1, fromPeg, medianPeg, toPeg);
  console.log(`Из стержня ${fromPeg} в стержень ${toPeg}`);
  move(count - 1, medianPeg, toPeg, fromPeg);
}

const count = 3;
const fromPeg = "1";
const toPeg = "2";
const medianPeg = "3";

move(count, fromPeg, toPeg, medianPeg);
