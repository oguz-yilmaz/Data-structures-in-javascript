/**
 * Although you can use Javascript's object literals or Maps as hash table out in the wild,
 * we will demonstrate how the implementation will look like
 */

class HashTable {
    values = {}
    length =  0
    size =  0

    calculateHash (key) {
        return key.toString().length % this.size
    }

    add (key, value) {
        const hash = this.calculateHash(key)

        if (!this.values.hasOwnProperty(hash)) {
            this.values[hash] = {}
        }

        if (!this.values[hash].hasOwnProperty(key)) {
            this.length++
        }

        return this.values[hash][key] = value
    }

    search (key) {
        const hash = this.calculateHash(key)

        const hasHashInValues = this.values.hasOwnProperty(hash)
        const hasKeyInHash = this.values[hash].hasOwnProperty(key)

        if (hasHashInValues && hasKeyInHash) {
            return this.values[hash][key]
        }

        return null
    }
}