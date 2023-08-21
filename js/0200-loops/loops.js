// for index
// for in
// for of
// while
// do while

const obj = { key: 1 }
for(let key in obj) {
  console.log(obj[key])
}

const arr = [1, 2, 3, 4]
const string = '222'
for(let index of (arr || string)) {
  console.log(arr[index])
}

function func(arguments) {
  for(let index of arguments) {
    console.log(arr[index])
  }
}

func(1, 2, 3, 4)

// const string = '222'
// string.length
// for(let key in string) { } ????
// for(let key in obj) { }

// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript
// https://www.codewars.com/kata/57241e0f440cd279b5000829/train/javascript
// https://www.codewars.com/kata/55c28f7304e3eaebef0000da/train/javascript
// https://www.codewars.com/kata/5721a78c283129e416000999/train/javascript
// https://medium.com/@andrei_diaconu/javascript-for-loop-exercises-4c6cbf570411
