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
/*
const array = [1, 3, 2];
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

array1 = [1, 3, 2];
array1.reduce((saved, item, index, array) => {
  // 0 + 1 = 1
  // 1 + 3 = 4
  // 4 + 2 = 6
  return saved + item;
}, []) // 6

array.find((item, index, array) => item === 3); // 3
objectsInArray1 = [ { 'prop': 1 }, { 'prop': 2 } ]
objectsInArray1.find((item) => {
  const key = 'prop'
  return item[key];
}) // { 'prop': 1 }

array.findIndex((item, index, array) => item === 3) // 1

array.filter((item, index, array) => item >= 3) // [3]

objectsInArray1.filter((item) => {
  const key = 'prop'
  return item[key];
}) // [{ 'prop': 1 }, { 'prop': 2 }]

Array.entries(objectsInArray1) // [ [0, { 'prop': 1 }], [ key || index, value] ]
Array.keys(); // [0, 1, 2]
Array.values(); // [ ]
// Array.every()
Array.includes(2) // true  what else if objects
Array.map((item, index, array) => item * 2)  // [2, 6, 4]
array.forEach((item, index, array) => {
  console.log(item);
})
*/

let array = [1, 3, 2];
const arrayInArray = [
  [1, 2],
  [3, 4]
]
const objectsInArray = [
  { 'prop': 1, 'another-prop': 3 },
  { 'prop': 2 }
]


// AT
console.log(`Array at [-1]:`, array[- 1])
console.log(`Array at at(-1):`, array.at(-2));

// Concat
console.log(`Concat 2 array: `,array.concat(arrayInArray, objectsInArray));

// Every
console.log(`Every array: `,array.every((item) => item < 10));

// Entries

// Fill

// Filter
console.log(`Filter array:`, array.filter((item, index, array) => item > 2));

// Find
console.log(`Find array:`, objectsInArray.find((item, index, array) => item.prop === 1));
// Array.prototype.findIndex()
// Array.prototype.findLast()
// Array.prototype.findLastIndex()

// forEach
console.log(`ForEach array:`)
array.forEach((item, index, array) => {
   console.log(item)
});

// includes
console.log(`Includes array with number:`, array.includes(2));
console.log(`Includes array with object:`, objectsInArray.includes({ prop: 2}));

// join
console.log(`Join array:`, array.join(''));
console.log(`Example str: `, 'abcd'.split('').reverse().join(''));

// map
console.log(`Map array:`, array.map((item, index, array) => {
  if (item === 3) {
    return item * 2
  }
  return  item;
}));

// Reduce
// 1 2 3

console.log('Reduce array: ', array.reduce((acum, item, index, array) => {
  acum = acum + item;
  return acum;
}, 0))

function customReduce(array) {
  let result = 0;
  array.forEach((item) => {
    result = result + item;
  })
  return result;
}

console.log('Reduce array: ', objectsInArray.reduce((acum, item, index, array) => {
  const keys = Object.keys(item);
  keys.forEach((key) => {
    if (!acum[key] || acum[key] < item[key]) {
      acum[key] = item[key];
    }
  })
  return acum;
}, { }))
// Array.prototype.reduceRight()

// reverse
console.log('WARNING CHANGE BY PLACE!')
console.log(`Reverse array: `, array.reverse());
array = [1, 3, 4, 5, 6, 2];

// slice
console.log(`Slice array: `, array.slice(1, -1));

// some
console.log(`Some array: `, array.some((item) => item > 5));

// sort
console.log('WARNING CHANGE BY PLACE!')
console.log(`Sort array numbers: `, array.sort((a, b) => a - b))
console.log(`Sort array objects: `, objectsInArray.sort((a, b) => {
  if (a.prop > b.prop) {
    return 1;
  } else if (a.prop < b.prop) {
    return -1;
  }
  return 0
}))
array = [1, 3, 4, 5, 6, 2];

// splice
console.log('WARNING CHANGE BY PLACE!')
console.log(`Splice array result: `, array.splice(-1, 0, 100))
console.log(`Splice array after: `, array);

// push, pop, shift, unshift
// pop - удаляет последний
// push - добавляет
// shift - удаляет первый
// unshift - добавляет в начало

/*
Редко но полезно
Array.prototype.entries()
Array.prototype.fill()
Array.prototype.flat()
Array.prototype.flatMap()
Array.from()
Array.fromAsync()
Array.of()

Редко используется
Array.prototype.copyWithin()
Array.prototype.toLocaleString()
Array.prototype.toReversed()
Array.prototype.toSorted()
Array.prototype.toSpliced()
Array.prototype.toString()
Array.prototype.values()
Array.prototype.with()
Array.prototype.keys()
Array.prototype.indexOf()
Array.prototype.lastIndexOf()








 */
