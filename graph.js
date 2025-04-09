A graph is a data structure that consists of:

A set of nodes (vertices).

A set of edges that connect pairs of nodes.

✅ Types of Graphs:
Based on Direction:

Directed Graph (Digraph): Edges have direction (A ➝ B).

Undirected Graph: Edges don’t have direction (A — B).

Based on Weight:

Weighted Graph: Edges have weights/costs.

Unweighted Graph: Edges don’t have weights.

Based on Connectivity:

Connected Graph: There’s a path between any two vertices.

Disconnected Graph: Not all vertices are reachable.

Cyclic vs Acyclic:

Cyclic Graph: Contains at least one cycle.

Acyclic Graph: No cycles.

A DAG (Directed Acyclic Graph) is a special kind used in scheduling, compilers, etc.

📊 Graph Representations:
1. Adjacency Matrix (2D Array)
js
Copy
Edit
// 0 1 2 3
// A-B-C-D
const matrix = [
  [0, 1, 0, 0], // A
  [1, 0, 1, 0], // B
  [0, 1, 0, 1], // C
  [0, 0, 1, 0]  // D
];
2. Adjacency List (Most Common)
js
Copy
Edit
const graph = {
  A: ["B"],
  B: ["A", "C"],
  C: ["B", "D"],
  D: ["C"]
};
🔁 Graph Traversal
1. BFS (Breadth-First Search)
js
Copy
Edit
function bfs(graph, start) {
  const visited = new Set();
  const queue = [start];

  while (queue.length > 0) {
    const node = queue.shift();
    if (!visited.has(node)) {
      console.log(node);
      visited.add(node);
      for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }
}

// Usage
bfs({
  A: ['B', 'C'],
  B: ['A', 'D'],
  C: ['A', 'E'],
  D: ['B'],
  E: ['C']
}, 'A');
2. DFS (Depth-First Search)
js
Copy
Edit
function dfs(graph, start, visited = new Set()) {
  if (visited.has(start)) return;

  console.log(start);
  visited.add(start);

  for (const neighbor of graph[start]) {
    dfs(graph, neighbor, visited);
  }
}

// Usage
dfs({
  A: ['B', 'C'],
  B: ['A', 'D'],
  C: ['A', 'E'],
  D: ['B'],
  E: ['C']
}, 'A');
🛣️ Shortest Path – Dijkstra’s Algorithm (Weighted Graph)
js
Copy
Edit
function dijkstra(graph, start) {
  const distances = {};
  const visited = new Set();
  const pq = new Map();

  for (let node in graph) {
    distances[node] = Infinity;
    pq.set(node, Infinity);
  }
  distances[start] = 0;
  pq.set(start, 0);

  while (pq.size > 0) {
    const [currentNode] = [...pq.entries()].reduce((a, b) => a[1] < b[1] ? a : b);
    pq.delete(currentNode);

    visited.add(currentNode);

    for (const neighbor in graph[currentNode]) {
      if (visited.has(neighbor)) continue;

      const newDist = distances[currentNode] + graph[currentNode][neighbor];
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        pq.set(neighbor, newDist);
      }
    }
  }

  return distances;
}

// Weighted graph
const weightedGraph = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 5 },
  C: { A: 4, B: 2, D: 1 },
  D: { B: 5, C: 1 }
};

console.log(dijkstra(weightedGraph, 'A'));
🔄 Cycle Detection in Undirected Graph (DFS)
js
Copy
Edit
function hasCycle(graph, node, visited = new Set(), parent = null) {
  visited.add(node);
  for (const neighbor of graph[node]) {
    if (!visited.has(neighbor)) {
      if (hasCycle(graph, neighbor, visited, node)) return true;
    } else if (neighbor !== parent) {
      return true;
    }
  }
  return false;
}

// Test
const cycleGraph = {
  A: ['B'],
  B: ['A', 'C'],
  C: ['B', 'D'],
  D: ['C', 'A'] // cycle here
};

console.log(hasCycle(cycleGraph, 'A')); // true

✅ 1. Depth-First Search (DFS)
▶️ Problem: Traverse a graph using DFS
Graph:

js
Copy
Edit
const graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: [],
  F: []
};
📌 Code:
js
Copy
Edit
function dfs(graph, node, visited = new Set()) {
  if (visited.has(node)) return;
  console.log(node);
  visited.add(node);
  for (const neighbor of graph[node]) {
    dfs(graph, neighbor, visited);
  }
}
dfs(graph, 'A');
✅ Output:
mathematica
Copy
Edit
A
B
D
E
C
F
🧠 DFS goes deep before backtracking.

✅ 2. Breadth-First Search (BFS)
▶️ Problem: Traverse level-by-level
Same graph:

js
Copy
Edit
const graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: [],
  F: []
};
📌 Code:
js
Copy
Edit
function bfs(graph, start) {
  const queue = [start];
  const visited = new Set([start]);

  while (queue.length) {
    const node = queue.shift();
    console.log(node);
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}
bfs(graph, 'A');
✅ Output:
mathematica
Copy
Edit
A
B
C
D
E
F
🧠 BFS visits each level of neighbors before going deeper.

✅ 3. Detect Cycle in Undirected Graph
▶️ Problem: Check if the graph has a cycle
js
Copy
Edit
const graph = {
  0: [1, 2],
  1: [0, 2],
  2: [0, 1]
};
📌 Code:
js
Copy
Edit
function hasCycle(graph) {
  const visited = new Set();

  function dfs(node, parent) {
    visited.add(node);
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        if (dfs(neighbor, node)) return true;
      } else if (neighbor !== parent) {
        return true;
      }
    }
    return false;
  }

  for (const node in graph) {
    if (!visited.has(node)) {
      if (dfs(node, null)) return true;
    }
  }
  return false;
}
✅ Output:
arduino
Copy
Edit
true
🧠 There's a cycle: 0 → 1 → 2 → 0

✅ 4. Topological Sort
▶️ Problem: Order of tasks with prerequisites
Graph:

js
Copy
Edit
const graph = {
  A: ['C'],
  B: ['C', 'D'],
  C: ['E'],
  D: ['F'],
  E: ['H'],
  F: ['G'],
  G: [],
  H: []
};
📌 Code:
js
Copy
Edit
function topologicalSort(graph) {
  const inDegree = {};
  const result = [];
  const queue = [];

  for (const node in graph) inDegree[node] = 0;

  for (const node in graph) {
    for (const neighbor of graph[node]) {
      inDegree[neighbor]++;
    }
  }

  for (const node in inDegree) {
    if (inDegree[node] === 0) queue.push(node);
  }

  while (queue.length) {
    const node = queue.shift();
    result.push(node);
    for (const neighbor of graph[node]) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) queue.push(neighbor);
    }
  }

  return result;
}
✅ Output:
css
Copy
Edit
['A', 'B', 'D', 'C', 'F', 'E', 'G', 'H']
🧠 Tasks are ordered such that all prerequisites are fulfilled.

✅ 5. Shortest Path in Unweighted Graph
▶️ Problem: Find shortest path from A to G
js
Copy
Edit
const graph = {
  A: ['B', 'C'],
  B: ['D'],
  C: ['E'],
  D: ['F'],
  E: ['F'],
  F: ['G'],
  G: []
};
📌 Code:
js
Copy
Edit
function shortestPath(graph, start, end) {
  const queue = [[start, 0]];
  const visited = new Set([start]);

  while (queue.length) {
    const [node, dist] = queue.shift();
    if (node === end) return dist;

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, dist + 1]);
      }
    }
  }
  return -1;
}
✅ Input:
js
Copy
Edit
shortestPath(graph, 'A', 'G')
✅ Output:
Copy
Edit
3
🧠 A → C → E → F → G (but shortest is A → B → D → F → G)

✅ 6. Number of Connected Components
▶️ Problem: Count isolated clusters
js
Copy
Edit
const graph = {
  A: ['B'],
  B: ['A'],
  C: ['D'],
  D: ['C'],
  E: []
};
📌 Code:
js
Copy
Edit
function countComponents(graph) {
  const visited = new Set();
  let count = 0;

  function dfs(node) {
    visited.add(node);
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) dfs(neighbor);
    }
  }

  for (const node in graph) {
    if (!visited.has(node)) {
      dfs(node);
      count++;
    }
  }

  return count;
}
✅ Output:
Copy
Edit
3