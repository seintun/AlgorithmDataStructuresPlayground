// Max Binary Heap, where parent node is bigger than child nodes
// Always insert and fill-up the left most of the tree
// Bubble-up, when new node inserted is larger than parent, keep swapping up
// [41, 39, 55, 18, 27, 12, 33]
// [01, 02, 03, 04, 05, 06, 07]
// Finding child node @ 2n+1 for left child node and 2n+2 for right child node
// Finding parent node @ (n-1)/2 after Math.floor
/**
 *          41
 *        /    \
 *      39      55
 *     /  \    /  \
 *    18  27  12  33
 */

class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 55, 18, 27, 12];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    // replace the first max with the popped value
    this.values[0] = end;
    this.sinkDown();
    return max;
  }
}

let heap = new MaxBinaryHeap();
console.log(heap);
heap.insert(111);
console.log(heap);
