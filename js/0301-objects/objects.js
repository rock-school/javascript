/*
OBJECT

OBJECT IS
const myObject = {}
const myArray = []
const myFunction = function() {}
const myDate = new Date();
const myError = new Error();
and e.t.c

const obj = {
  x: 1,
  y: 2,
  z: 3
}

for (var key in obj) {
 console.log(key, obj[key])
}
*/


const obj = {
  value: 2,
  testtest: 3,
  42: 4,
  'test test': 5,
  arr: [1, 2, 3, 4],
  obj: {
    test1: '1',
    test2: '2',
    test3: '3'
  },
  func: function() {
    this.value // 2
    this.testtest // 3
  },
  arrow: () => {
    this.value // 2
    this.testtest // 3
  },

  get someGetter() {
    return this.value;
  },
  set someSetter(value) {
    this._someSetter = value;
  }
}

obj.value // 2
obj.testtest // 3
obj.test test // error
obj['test test'] // 5
obj.42 // error
obj['42'] // 4
obj.obj.test1 // 1
obj.arr[0]
obj.func();
obj.arrow();
obj.someSetter = 3;
obj._someSetter // 3
obj.someGetter //

// Передаються по ссылке
function someFunction(obj) {
  obj.a = 3;
}


someFunction(obj);
ob.a // 3

const obj = { };

Object.keys(obj); // ['value', 'testtest', 'etc']
Object.keys(obj).forEach((key) => {
  console.log(`key`, key);
  console.log(`value`, obj[key]);
})

Object.values(obj); // [1, 2,  3, 4, [1, 2, 3, 4],]
Object.values(obj).forEach((value) => {
  console.log(`value`, value);
})

Object.entries(obj); // [ ['value', 2], [ 'testtest', 3 ],]
Object.entries(obj).forEach((entrie) => {
  console.log(`key`, entrie[0]);
  console.log(`value`, entrie[1]);
})

Object.assign(obj, { value: 1 }, { value: 2 }, { test: 3 })

delete obj.obj
obj.obj // error


const obj = {};
obj.value = 3;
obj.value // 3
Object.freeze(obj);
obj.value = 4;
obj.value // 3


// empty obj
const emptyObj = Object.create({});
emptyObj.__proto__ // empty

String.prototype.newMethod = () => { console.log('sdfs') }
'sdfs'.newMethod()
Object.prototype.newObjectMethod = () => { console.log('new method') }
'sdfs'.newObjectMethod()
[].newObjectMethod()


const customFreeze = (obj) => {
  Object.keys(obj).forEach((key) => {
    Object.defineProperty(obj, key, {
      writable: false,
    })
  })
}

/*
  console.log(Object.hasOwn(object1, 'prop'));
  // Expected output: true

  console.log(Object.hasOwn(object1, 'toString'));
  // Expected output: false

  console.log(Object.hasOwn(object1, 'undeclaredPropertyValue'));
  // Expected output: false
*/


/*
create, toString, hasOwnProperty, keys, entries, freeze, defineProperty(ies), assign
*/

/*
https://learn.javascript.ru/object
https://developer.mozilla.org/ru/docs/Learn/JavaScript/Objects/Basics
  */
