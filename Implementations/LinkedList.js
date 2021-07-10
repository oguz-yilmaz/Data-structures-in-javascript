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
        this.head = new Node(value)
        this.tail = this.head
        this.length = 1
    }

    add(value) {
        const newNode = new Node(value)
        this.tail.next = newNode

        this.tail = newNode
        this.length++
    }

    removeByValue(value) {

    }

    removeByIndex(index) {
        this.traverseList((node, ind) => {
            if (index-1 === ind && index < this.length) {
                const prev = node
                const current = node.next
                const next = (index < this.length) ? node.next.next : null
            }
        })
    }

    traverseList(callback) {
        let node = this.head
        let index = 0

        while (node.next) {
            callback(node, index)

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

myLinkedList.print()