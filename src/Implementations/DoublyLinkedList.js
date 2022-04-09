const Node = require('./Node')

class DoublyLinkedList {
    constructor(value) {
        this.tail = this.head = new Node(value)

        this.length = 1
    }

    printList() {
        let array = []
        let current = this.head

        while (current !== null) {
            array.push(current.value)

            current = current.next
        }

        return this
    }

    // Insert node at end of the list
    append(value) {
        let newNode = new Node(value)

        this.tail.next = newNode
        newNode.previous = this.tail
        this.tail = newNode

        this.length++
        this.printList()
    }

    // Insert node at the start of the list
    prepend(value) {
        let newNode = new Node(value)

        newNode.next = this.head
        this.head.previous = newNode
        this.head = newNode

        this.length++
        this.printList()
    }

    // Insert node at a given index
    insert(index, value) {
        if (!Number.isInteger(index) || index < 0 || index > this.length + 1) {
            throw new Error(`Invalid index. Current length is ${this.length}.`)
        }

        if (index === 0) {
            this.prepend(value)

            return this
        }

        if (index === this.length) {
            this.append(value)

            return this
        }

        // Reach the node at that index
        let newNode = new Node(value)
        let previousNode = this.head

        for (let k = 0; k < index - 1; k++) {
            previousNode = previousNode.next
        }

        let nextNode = previousNode.next

        newNode.next = nextNode
        previousNode.next = newNode

        newNode.previous = previousNode
        nextNode.previous = newNode

        this.length++
    }

    // Remove a node
    remove(index) {
        if (!Number.isInteger(index) || index < 0 || index > this.length) {
            console.log(`Invalid index. Current length is ${this.length}.`)
            return this
        }

        // Remove head
        if (index === 0) {
            this.head = this.head.next
            this.head.previous = null

            this.length--
            this.printList()
            return this
        }

        // Remove tail
        if (index === this.length - 1) {
            this.tail = this.tail.previous
            this.tail.next = null

            this.length--

            return this
        }

        // Remove node at an index
        let previousNode = this.head

        for (let k = 0; k < index - 1; k++) {
            previousNode = previousNode.next
        }

        let deleteNode = previousNode.next
        let nextNode = deleteNode.next

        previousNode.next = nextNode
        nextNode.previous = previousNode

        this.length--

        return this
    }
}

exports.DoublyLinkedList = DoublyLinkedList