/*
1. Number // 1, NaN, +Infinity, -Infinity
2. String // 'string1'
3. Boolean // true, false
4. Undefined // undefined
5. Null // null
6. Object // object, function, array,
7. Map // Week, Map, Set
8. Symbol
*/

/*
Не МОДИФИЦИРУЮТСЯ передаются по значению

const myNumber = 5; // new Number(5);
const myString = '5'; // new String("sdf");
const myBoolean = false; // new Boolean(false);
const myNull = null;
const myUndefined = undefined;

function createStr(testNumber) {
    console.log(testNumber); // 1
    testNumber = 2;
    console.log(testNumber); // 2
}

const testNumber = 1;
console.log(testNumber) // 1
createStr(testNumber);
console.log(testNumber) // 1
*/

/*
МОДИФИЦИРУЮТСЯ передаются по ссылке

const myObject = {
    test: 1
} // new Object()

function createStr(myObject) {
    console.log(myObject.test); // 1
    myObject.test = 2;
    console.log(myObject.test); // 2
}

console.log(myObject.test) // 1
createStr(myObject);
console.log(myObject.test) // 2
*/


/*
TYPEOF: ИСКЛЮЧЕНИЕ:
NULL === Object.

null: null,
undefined: undefined
Object: Array, Function, Object, Week, Map, Set
Number: Infinity, NaN, Symbol, Boolean (0, 1)
STRING: string
Boolean: true, false,
*/

/*
instanse of
*/


/*
NUMBER

convert string to Number
Number('42') // 42
Number('42$') // NaN

parseInt('42') // 42
parseInt('42$sdfsd!') // 42

parseFloat('42.1') // 42.1
*/

/*
BOOLEAN

FALSE: false, null, undefined, "", 0, NaN
TRUE: "false", "0", {} and e.t.c.

Boolean("false") // true of false
Boolean({}) // true of false
Boolean("") // true of false
Boolean() // true of false

and

!!{}
!!'sdfs'
!!1213123123
*/





