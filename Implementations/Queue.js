class Queue {
    queue = []

    // O(1)
    enqueue(item) {
        return this.queue.push(item)
    }

    // O(n)
    dequeue() {
        return this.queue.shift()
    }

    // O(n)
    get(item) {
        return this.queue.find(el => el === item)
    }

    get length() {
        return this.queue.length
    }
}