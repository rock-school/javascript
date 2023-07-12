var str1 = '1';

var str5; // unedfiend
str5 = 5;

let str2 = '2';

let str4; // undefined
str4 = 4;

str3 // error
const str3 = '3';
str3 // 3

str6 // 6
var str6 = '6';
str6 // 6

// var = undefined by default
// let = undefined by default
// const = need to be intializen

 let myNumber1 = 1,
  myNumber2 = 2,
  myNumber3 = 3


const obj = { prop: 1, proto: 2, test: 3 };

const { prop, proto, test } = obj;
// prop = 1
// proto = 2
const prop = obj.prop,
      proto = obj.proto,
      test = obj.test;


const array = "Юлий Цезарь Император Рима".split(" "); // ['Юлий', 'Цезарь', 'Император', 'Рима', 'test', undefined]

let [, , title = 'default', rome, test, default1 = 'sdfsdf'] = array;

// title = Император
// default1 = sdfsdf

