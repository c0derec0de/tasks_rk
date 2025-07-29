class Stack {
  constructor() {
    this.last = null;
    this.size = 0;
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
    this.size++;
  }
  pop() {
    let res;
    if (this.last !== null) {
      res = this.last.data;
      this.last = this.last.prev;
      this.size--;
    }
    return res;
  }
  size() {
    return this.size;
  }
}

export default StackMoves;
