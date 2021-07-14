const { createLinkedList } = require('../../src/utils')

test('Properly adds new value', () => {
    const list = {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: null,
                prev: null,
            },
            prev: null,
        },
        prev: null,
    }

    expect(createLinkedList([1, 2, 3]).head).toEqual(list);
});

test('Properly removes a node from the list by index', () => {
    const list = {
        value: 1,
        next: null,
        prev: null,
    }

    const myLinkedList = createLinkedList([1, 2, 3])
    myLinkedList.removeByIndex(2)
    myLinkedList.removeByIndex(1)

    expect(myLinkedList.head).toEqual(list);
})

test('Properly removes a node from the list by node value', () => {
    const list = {
        value: 300,
        next: null,
        prev: null,
    }

    const myLinkedList = createLinkedList([100, 200, 300])
    myLinkedList.removeByValue(200)
    myLinkedList.removeByValue(100)

    expect(myLinkedList.head).toEqual(list);
})