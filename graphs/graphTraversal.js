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
  depthFirstRecursive(start) {
    // result to print of visited vertex
    const result = [];
    // hash table to keep track which vertex is visited
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      // return null when missing args
      if (!vertex) return null; // base case
      // set each vertex as true when visted in hash table
      visited[vertex] = true;
      // push each visited vertex to result
      result.push(vertex);
      // iteriate each value of corresponding vertex
      adjacencyList[vertex].forEach(neighbor => {
        // if the value vertex yet visted, recursively pass as args
        if (!visited[neighbor]) return dfs(neighbor);
      });
    })(start);
    console.log(result);
    return result;
  }
}

let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
g.depthFirstRecursive("A");

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
