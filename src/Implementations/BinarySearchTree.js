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
}

exports.BinarySearchTree = BinarySearchTree