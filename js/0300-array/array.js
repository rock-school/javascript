
const array = [1, 3, 2];
const arrayInArray = [ [1, 2], [3, 4] ]
const objectsInArray = [ { 'prop': 1 }, { 'prop': 2 } ]

let nameOfArray1 = [ 0, 1, 2, 3, 4 ]
let nameOfArray2 = [ "name", "roman", 'marianna', 3, 4 ]

const value1 = nameOfArray1.at(2);
const value2 = nameOfArray1[2];

const result = value1 === value2 // true

// Methods of adding

// push, pop, shift, unshift
// pop - удаляет последний
// shift - удаляет первый
// push - добавляет в конец - самый распространный
// unshift - добавляет в начало
nameOfArray1.push(5);
nameOfArray1.push(123123123123123123); // [ 0, 1, 2, 3, 4, 5, 123123123123123123]
nameOfArray1.pop();  // [ 0, 1, 2, 3, 4, 5]

// AT
console.log(`Array at [-1]:`, array[- 1])
console.log(`Array at at(-1):`, array.at(-2));

// Методы перебора
nameOfArray2 = [ "name", "roman", 'marianna', 3, 4 ];

let friends = []; // [ "name", "marianna" ]

nameOfArray2.forEach((name, index) => {
    // 1
    // value = "name"
    // index = 0


    // 2
    // value = "roman"
    // index = 1

    if (name === "roman" || name === "marianna") {
      friends.push(name);
    }
});


nameOfArray2 = [ "name", "roman", 'marianna', 3, 4 ];
let findMarianna = nameOfArray2.find((value, index) => {

    // 1
    // value = "name"
    // index = 0
    // false

    // 2
    // value = "roman"
    // index = 1
    // false


    // 3
    // value = "marianna"
    // index = 2
    // true

    if (value === "marianna") {
      return true;
    }
    return false;
});
// "marianna"

nameOfArray2 = [ "name", "roman", 'marianna', 3, 4 ];
let namesArray = nameOfArray2.filter((value, index) => {

  // 1
  // value = "name"
  // index = 0
  // true -> namesArray = [ "name" ]

  // 2
  // value = "roman"
  // index = 1
  // true -> namesArray = [ "name",  "roman" ]


  // 3
  // value = "marianna"
  // index = 2
  // true -> namesArray = [ "name",  "roman", "marianna" ]

  // 5
  // value = 4
  // index = 4
  // false  -> namesArray = [ "name",  "roman", "marianna" ]

   if (typeof value === "number") {
     return true;
   }
   return false;
})



// reverse
nameOfArray2 = [ "name", "roman", 'marianna', 3, 4 ];
let reversedArray = nameOfArray2.reverse();
//  [ 4, 3, "marianna", "roman", "name" ];


// map
nameOfArray2 = [ "name", "roman", 'marianna', 3, 4 ];
let result = nameOfArray2.map((item, index) => {
  if (item === 3) {
    return item * 2
  }
  return item;
}); // [ "name", "roman", 'marianna', 6, 4 ]

// join
nameOfArray2 = [ "name", "roman", 'marianna', 3, 4 ];
let resultStr = nameOfArray2.join(" separator ")
// "name separator roman separator marinanna separator 3 separator 4"


// Concat
nameOfArray1 = [ 0, 1, 2, 3, 4 ];
nameOfArray2 = [ "name", "roman", 'marianna', 3, 4 ];
let newArray = nameOfArray2.concat(nameOfArray1)
// [ "name", "roman", 'marianna', 3, 4, 0, 1, 2, 3, 4  ]


// # PART 2


// SORT
let nameOfArray1 = [ 0, 3, 2, 1, 4 ];
let result = nameOfArray1.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
}); // [4, 3, 2, 1, 0]


// Every
let nameOfArray1 = [ 0, 3, 2, 1, 4 ];
nameOfArray1.every((item) => item < 10);

let nameOfArray1 = [ 0, 3, 2, 1, 4 ];
nameOfArray1.some((item) => item > 5);

/**
 * End port 2
 * **/


array.slice(0, 2); // [1, 3]
array.splice(0, 1, [5, 5, 5]) // [ [5, 5, 5], 3, 2]

array1.reduce((saved, item, index, array) => {
  // 0 + 1 = 1
  // 1 + 3 = 4
  // 4 + 2 = 6
  return saved + item;
}, []) // 6


// push, pop, shift, unshift
// pop - удаляет последний
// shift - удаляет первый
// push - добавляет в конец - самый распространный
// unshift - добавляет в начало


// splice
// sort
// some
// reverse


/*
Редко но полезно
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
Array.prototype.entries(objectsInArray1) // [ [0, { 'prop': 1 }], [ key || index, value] ]
 */
