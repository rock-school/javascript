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
