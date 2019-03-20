class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return this.size++;
  }
  pop() {
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

// BigO:
// Insertion - O(1)
// Removal - O(1)
// Searching - O(N)
// Access - O(N)

let stack = new Stack();
console.log(stack);

stack.push("Google.com");
stack.push("Google Image Search");
stack.push("Google Image Search Puppies");
console.log(stack);

stack.pop();
console.log(stack);
