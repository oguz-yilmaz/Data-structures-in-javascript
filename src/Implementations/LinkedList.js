class Node {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}

class LinkedList {
    head = null
    tail = null
    length = 0

    constructor(value) {
        this.head = this.tail = new Node(value)
        this.length = 1
    }

    add(value) {
        const newNode = new Node(value)
        this.tail.next = newNode

        this.tail = newNode
        this.length++
    }

    insertAfter(value, toNodeValue) {
        const newNode = new Node(value)

        this.traverseList(node => {
            if (node.value === toNodeValue) {
                const next = node.next

                node.next = newNode
                newNode.next = next
            }
        })
    }

    removeByValue(value) {
        let index = -1

        this.traverseList((node, prev, ind) => {
            if (value === node.value) {
                const next = (ind <= this.length-2) ? node.next : null
                prev.next = next

                if (ind === this.length-1) {
                    this.tail = next
                }

                index = ind
            }
        })

        return index
    }

    removeByIndex(index) {
        this.traverseList((node, prevNode, ind) => {
            if (index-1 === ind && index < this.length) {
                const prev = node
                const next = (index <= this.length-2) ? node.next.next : null

                prev.next = next

                if (index === this.length-1) {
                    this.tail = next
                }
            }
        })

        return index
    }

    traverseList(callback) {
        let node = this.head
        let prevNode = null
        let index = 0

        while (node) {
            callback(node, prevNode, index)

            prevNode = node
            node = node.next
            index++
        }
    }

    print() {
        return this.traverseList(node => console.log(node.value))
    }
}

const myLinkedList = new LinkedList(21)
myLinkedList.add(22)
myLinkedList.add(23)
myLinkedList.add(24)
myLinkedList.add(25)

myLinkedList.removeByIndex(4)
myLinkedList.removeByValue(22)
myLinkedList.insertAfter(44, 23)
myLinkedList.insertAfter(45, 23)
myLinkedList.insertAfter(45, 24)

myLinkedList.print()