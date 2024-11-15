
function() {
 console.log(arguments);
 console.log(arguments.length);
 arguments - єто не массив а массиво подобный обьект
 конвертация в массив
 const arr = [...arguments];
}

// named (1. Function Declaration):
function sum(a, b) {
  return a + b;
}

//  non named (2. Function Expression):
const expressionNoNamed = function (a, b) {
  return a + b;
}

const expressionNamed = function namedFunction (a, b) {
  return a + b;
}

const expressionArray = (a, b) => {
  return a + b;
}


// IIFE -> https://developer.mozilla.org/en-US/docs/Glossary/IIFE

const a = 1;
const b = 2;
(function (a, b) {
  function() { alert(a+b) }
}())


// Функция высшего порядка / фу́нкция обра́тного вы́зова / callback функция
function(calc, variable) {
  return calc(variable);
}

// error first функция
function(error, variable) {
  if (somethingWrong) {
    error();
    return;
  }
  return variable;
}


// Рекурсивная функция
/*function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}
console.log(factorial(5));*/

// __proto__ and prototype
