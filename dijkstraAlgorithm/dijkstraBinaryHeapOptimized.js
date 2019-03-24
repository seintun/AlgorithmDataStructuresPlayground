// Create a mock Dijkstra
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
  // add Dijkstra Algorithm to find the shortest path/weight from start to finish
  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = []; // return at the end
    let smallest;
    //  building up the initial state
    for (let vertex in this.adjacencyList) {
      // if the vertex is the start, assign as 0 and add to PQ list
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        // set the initial weight as Infinity since its distance is unknown
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      // intiate each vertex prev as null to be assigned later
      previous[vertex] = null;
    }
    // start while-loop that will keep visting each node till PQ list is empty
    while (nodes.values.length) {
      // value of each vertex, since its an object
      smallest = nodes.dequeue().val;
      // breaking point for while-loop when smallest matches with finish vertex
      if (smallest === finish) {
        // tracing previous vertex till false
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          // find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          // calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            // updating new smallest distance to enighbor
            distances[nextNeighbor] = candidate;
            // updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    // add the starting vertex and order from start to finish
    console.log(path.concat(smallest).reverse());
    return path.concat(smallest).reverse();
  }
}
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
}

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

graph.Dijkstra("A", "E"); // [ 'A', 'C', 'D', 'F', 'E' ]
