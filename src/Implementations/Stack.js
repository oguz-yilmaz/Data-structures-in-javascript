class Stack {
    items = []

    // O(1)
    push(item) {
        this.items.push(item)
    }

    // O(1)
    pop() {
        return this.items.pop()
    }

    // O(n)
    get(item) {
        return this.items.find(el => el === item)
    }
}