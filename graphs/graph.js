class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
  }
  removeVertex(vertex) {
    // condition that will keep popping and removing associated edge
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

let graph = new Graph();
// console.log(graph);
graph.addVertex("Dallas");
graph.addVertex("Tokyo");
graph.addVertex("New York");
graph.addVertex("San Francisco");
// console.log(graph);
graph.addEdge("Dallas", "New York");
graph.addEdge("Dallas", "San Francisco");
graph.addEdge("San Francisco", "New York");
graph.addEdge("San Francisco", "Tokyo");
console.log("Added edges for airports", graph);
graph.removeEdge("San Francisco", "Tokyo");
console.log("Removed SF-Tokyo edge", graph);
graph.removeVertex("Dallas");
console.log("Removed Dallas and its associated edges", graph);
