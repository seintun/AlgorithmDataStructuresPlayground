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
}

let tree = new BinarySearchTree();
console.log(tree);
tree.root = new Node("15");
tree.root.right = new Node("5");
tree.root.left = new Node("20");
console.log(tree);
