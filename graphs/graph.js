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
console.log(graph);
