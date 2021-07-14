const { LinkedList } = require('./Implementations/LinkedList')

exports.createLinkedList = (values = []) => {
    if (!values.length) {
        return new LinkedList(null)
    }

    const linkedList = new LinkedList(values[0])

    for (const value of values.slice(1)) {
        linkedList.add(value)
    }

    return linkedList
}