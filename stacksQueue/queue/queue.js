class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(value) {
    var newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return this.size++;
  }
}

// Create a new queue list
let queue = new Queue();
console.log(queue);

// Adding node/print jobs in a queue ["Print One", "Print Two"]
queue.enqueue("Print One");
queue.enqueue("Print Two");
console.log(queue);
