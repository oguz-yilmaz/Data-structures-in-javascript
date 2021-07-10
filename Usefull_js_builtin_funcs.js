// Array.prototype.find(): returns the value of the first element in the provided array that satisfies the provided testing function.
console.log([1, 2, 23, 55].find(element => element === 23)) //23

// Array.prototype.findIndex(): returns the index of the first element in the array that satisfies the provided testing function.
console.log([1, 2, 23, 55].findIndex(element => element === 23)) //2

// Array.prototype.unshift(): method adds one or more elements to the beginning of an array and returns the new length of the array.
const fruit = ["Banana", "Orange", "Apple", "Mango"]
console.log(fruit.unshift("Lemon", "Pineapple")) //6
console.log(fruit) //[ 'Lemon', 'Pineapple', 'Banana', 'Orange', 'Apple', 'Mango' ]

//Array.prototype.shift(): removes the first element from an array and returns that removed element.

// array.map, filter, reduce