class Queue {
  constructor() {
    this.first = null; // первый
    this.last = null; // последний
    this.size = 0;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class QueueMoves extends Queue {
  // добавить в очередь
  enqueue(data) {
    const addedNode = new Node(data); // добавили новый узел
    if (this.first) {
      // если уже есть первый в очереди
      this.last.next = addedNode; // привязываем новый узел к концу очереди
      this.last = addedNode; // обновляем указатель на последний элемент
    } else {
      this.first = addedNode; // делаем новый узел и первым и последним
      this.last = addedNode;
    }
    this.size++;
  }
  // извлечь из очереди
  dequeue() {
    if (!this.first) {
      // если в очереди нет элементов, вернем null
      return null;
    }
    const removedNode = this.first; // удалять всегда будем первый элемент (FIFO)
    this.first = this.first.next; // перемещаем указатель на следующий
    if (this.first === null) {
      // если после удаления очередь пустая, то обнуляем указатель на последний элемент
      this.last = null;
    }
    this.size--;
    return removedNode.data;
  }

  size() {
    return this.size;
  }
}

export default QueueMoves;
