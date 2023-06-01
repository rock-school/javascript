function sayHi(name) {
  // LexicalEnvanment = {
  //   name: 'Jack',
  //   ops: 'undefined'
  // }
  const ops = 'hello' + name;
  // LexicalEnvanment = {
  //   name: 'Jack',
  //   ops: 'hello Jack'
  // }
  console.log(ops);
}
sayHi('Jack')

// Замыкание
// Область видимости
// Лексическое окружение

