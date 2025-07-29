import StackMoves from "./stack.js";

function stack() {
  console.log("===========stack==============");
  const stackMoves = new StackMoves();
  stackMoves.push(2);
  stackMoves.push(4);
  stackMoves.pop();
  stackMoves.push(6);
  console.log(stackMoves);
}

stack();
