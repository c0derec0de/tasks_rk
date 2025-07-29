import StackMoves from "./stack.js";
import QueueMoves from "./queue.js";

function stack() {
  console.log("===========stack==============");
  const stackMoves = new StackMoves();
  stackMoves.push(2);
  stackMoves.push(4);
  stackMoves.pop();
  stackMoves.push(6);
  console.log(stackMoves);
}

function queue() {
  console.log("===========queue==============");
  const queueMoves = new QueueMoves();
  queueMoves.enqueue(2);
  queueMoves.enqueue(4);
  queueMoves.dequeue();
  queueMoves.enqueue(6);
  console.log(queueMoves);
}
stack();
queue();
