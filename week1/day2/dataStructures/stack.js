class Stack {
  constructor() {
    this.last = null;
  }
}

class Node {
  constructor(data, prev) {
    this.data = data;
    this.prev = prev;
  }
}

class StackMoves extends Stack {
  push(data) {
    this.last = new Node(data, this.last);
  }
  pop() {
    let res;
    if (this.last !== null) {
      res = this.last.data;
      this.last = this.last.prev;
    }
    return res;
  }
}

export default StackMoves;
