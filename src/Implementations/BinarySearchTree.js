class Node {
    constructor (value, left = null, right = null) {
        this.value = value
        this.left = left
        this.right = right
    }
}

/**
 * In a binary search tree, the left child node is always smaller than the parent,
 * and the right child is always greater than the parent
 *
 *  left child < parent node < right child
 * */
class BinarySearchTree {
    root = null

    addNode (value) {
        const newNode = new Node(value)

        if (!this.root) {
            this.root = newNode
        }
        else {
            this.insertNode(this.root, newNode)
        }
    }

    remove (data) {
        return this.root = this.removeNode(this.root, data)
    }

    insertNode (node, newNode) {
        if (node.value === newNode.value) {
            return
        }

        if (node.value < newNode.value) {
            return node.right ? this.insertNode(node.right, newNode) : node.right = newNode
        }
        else {
            return node.left ? this.insertNode(node.left, newNode) : node.left = newNode
        }
    }

    /**
     * 3 possible scenario
     * removing a leaf
     * removing a node with one child
     * removing a node with 2 child
     * */
    removeNode (node, data) {
        if (!node) {
            return null
        }

        if (node.value < data) {
            return node.left = this.removeNode(node.right, data)
        }
        else if (node.value > data) {

        }
        // if node.value === data
        else {
            // if node is a leaf
            if (!node.left && !node.right) {
                // means it only have value, nullify it
                return node = null
            }

            // has one child so replace it with it
            if (!node.left) {
                return node = node.right
            }

            // has one child so replace it with it
            if (!node.right) {
                return node = node.left
            }

            // has two child node

            // finds the minimum of the right subtree
            // it has to be right subtree because it has a node that has a value guaranteed bigger than any value
            // in the left subtree and should have a node that can be replaced with the node we are replacing meaning
            // it is smaller all values on the right subtree.
            let min = this.findMinNode(node.right)

            node.data = min.data
            node.right = this.removeNode(node.right, min.data)

            return node
        }
    }

    // is important if you want to flatten the tree back into its original sequence
    // left root right
    traverseInOrder (node, callback = (node) => {}) {
        if (node) {
            this.traverseInOrder(node.left, callback)

            callback(node)

            this.traverseInOrder(node.right, callback)
        }
    }

    // is important if you need to inspect roots before inspecting the leaves.
    // root left right
    traversePreOrder (node, callback = (node) => {}) {
        if (node) {
            callback(node)

            this.traversePreOrder(node.left, callback)

            this.traversePreOrder(node.right, callback)
        }
    }

    /**
     *  is important if you want to delete an entire tree, or simply want to inspect the leaves before inspecting
     *  the nodes. If you deleted the root node, you wouldn’t be able to delete the nodes in the right subtree!
     *
     *  left right root
     *  */
    traversePostOrder (node, callback = (node) => {}) {
        if (node) {
            this.traversePostOrder(node.left, callback)

            this.traversePostOrder(node.right, callback)

            callback(node)
        }
    }

    dfs (value) {
        let foundNode = null

        this.traversePreOrder(this.root, (node) => {
            if (value === node.value) {
                foundNode = node
            }
        })

        return foundNode
    }

    /**
     *  we have 2 queue
     *  queue and output
     *  */
    bfs () {
        if (!this.root) {
            return
        }

        this.queue = []
        this.output = []

        this.queue.push(this.root)

        while (this.queue.length) {
            const node = this.queue.shift()

            if (node.left) {
                this.queue.push(node.left)
            }

            if (node.right) {
                this.queue.push(node.right)
            }

            this.output.push(node.value)
        }

        return this.output
    }

    findMinNode (subTreeRoot = null) {
        let node = subTreeRoot ? subTreeRoot : this.root

        while (node.left) {
            node = node.left
        }

        return node
    }

    findMaxNode (subTreeRoot = null) {
        let node = subTreeRoot ? subTreeRoot : this.root

        while (node.right) {
            node = node.right
        }

        return node
    }
}

exports.BinarySearchTree = BinarySearchTree




















