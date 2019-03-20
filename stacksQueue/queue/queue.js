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
  dequeue() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

// BigO
// Insertion O(1)
// Removal O(1)
// Searching O(N)
// Access O(N)

// Create a new queue list
let queue = new Queue();
console.log(queue);

// Adding node/print jobs in a queue ["Print One", "Print Two", "Print Three"]
queue.enqueue("Print One");
queue.enqueue("Print Two");
queue.enqueue("Print Three");
console.log(queue);

queue.dequeue();
console.log(queue);
