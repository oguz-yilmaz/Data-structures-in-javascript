class Graph {
    adjacencyList = new Map
    verticesLength = 0

    addVertex (vertex) {
        if (this.adjacencyList.size <= 0) {
            this.firstVertex = vertex
        }

        this.adjacencyList.set(vertex, [])
        this.verticesLength++
    }

    addEdge (fromVertex, toVertex) {
        this.adjacencyList.get(fromVertex).push(toVertex)
        this.adjacencyList.get(toVertex).push(fromVertex)
    }

    dfs (callback = (vertex) => console.log(vertex)) {
        const firstVertexValues = this.adjacencyList.get(this.firstVertex)

        const addToStack = (arr, stack = []) => {
            for (const val of arr) {
                if (!stack.includes(val)) {
                    stack.push(val)

                    addToStack(this.adjacencyList.get(val), stack)
                }
            }

            return stack
        }

        const vertices = addToStack(firstVertexValues)

        for (const vertex of vertices) {
            callback(vertex)
        }
    }

    print () {
        const vertices = this.adjacencyList.keys()

        for (let vertex of vertices) {
            const values = this.adjacencyList.get(vertex)

            let value = ''
            for (let j of values) {
                value += `${j} `
            }

            console.log(`${vertex} => ${value}`)
        }
    }
}