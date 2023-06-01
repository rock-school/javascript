/*
ARRAY

const array1 = [1, 2, 3, 4]
const array2 = new Array(1, 2, 3);
const array3 = [1, 2, {}, []]
array3.length === 4;

FUCK UP
new Array(3) // [undefined, undefined, undefined]
new Array("3") // ["3']
 */

const array = [1, 3, 2,];
const arrayInArray = [ [1, 2], [3, 4] ]
const objectsInArray = [ { 'prop': 1 }, { 'prop': 2 } ]

// ARRAY METHODS

array.join(" separator ") // '1 separator 3 separator 2 separator'
array.reverse(); // [2, 3, 1]
array.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
}); // [3, 2, 1]
array.concat([4,5]) // [1, 3, 2, 4, 5]
array.slice(0, 2); // [1, 3]
array.splice(0, 1, [5, 5, 5]) // [ [5, 5, 5], 3, 2]
array.push('test') // [1, 3, 2, 'test']
array.pop(); // [1, 3]
array.unshift('test2'); // ['test2', 1, 3, 2]
array.shift(); // [3, 2]

array.reduce((acum, item) => {
 return acum + item;
}, 0) // 6
array.find((item, index, array) => item === 3); // 3
array.findIndex((item, index, array) => item === 3) // 1
array.filter((item, index, array) => item >= 3) // [3]
Array.entries()
Array.keys();
Array.values();
Array.every()
Array.includes(2) // true  what else if objects
Array.map((item) => item * 2)  // [2, 6, 4]
array.forEach((item, index, array) => {
  console.log(item);
})


