class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    var current = this.root;
    var found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    // when current ran out, while loop terminates and cant finf node
    if (!found) return undefined;
    return current;
  }
  // return true or false only
  contian(value) {
    if (this.root === null) return false;
    var current = this.root;
    var found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
  BFS() {
    var node = this.root,
      data = [],
      queue = [];
    // add the first root node to the queue
    queue.push(node);

    // while there still something in the queue,
    while (queue.length) {
      // remove the first node from queue
      node = queue.shift();
      // move the node to store inside the data[]
      data.push(node.value);
      // if that still have either left or right node, keep adding to the queue
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    // once the queue is empty, return the [] resulting from the search
    console.log(data);
    return data;
  }
  DFSPreOrder() {
    var data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    console.log(data);
    return data;
  }
  DFSPostOrder() {
    var data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    console.log(data);
    return data;
  }
}

let tree = new BinarySearchTree();
// tree.root = new Node("15");
// tree.root.right = new Node("5");
// tree.root.left = new Node("20");
// console.log(tree);

tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
console.log(tree);
/**
 *        10
 *      /    \
 *    5       13
 *   / \     /  \
 * 2    7   11   16
 */

// tree.find(7);

// retrieving node level by level through breadth search
// tree.BFS(); // [10, 5, 13, 2, 7, 11, 16]

tree.DFSPreOrder();
tree.DFSPostOrder();
tree.DFSInOrder();
