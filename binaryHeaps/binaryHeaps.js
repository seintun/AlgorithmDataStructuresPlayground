// Max Binary Heap, where parent node is bigger than child nodes
// Always insert and fill-up the left most of the tree
// Bubble-up, when new node inserted is larger than parent, keep swapping up
// [41, 39, 55, 18, 27, 12, 33]
// Finding child node @ 2n+1 for left child node and 2n+2 for right child node
// Finding parent node @ (n-1)/2 from left child node and (n-2)/2 from right child node after Math.floor
/**
 *          41
 *        /    \
 *      39      55
 *     /  \    /  \
 *    18  27  12  33
 */
