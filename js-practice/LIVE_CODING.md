1. Напишите deep clone для объекта.
2. Порядок выполнения then catch и что выведеться

```javascript
Promise.resolve(10)
  .then(e => console.log(e)) // ??
  .then(e => Promise.resolve(e))
  .then(console.log) // ??
  .then(e => {
      if (!e) {
        throw 'Error caught';
      }
  })
  .catch(e => {
      console.log(e); // ??
      return new Error('New error');
  })
  .then(e => {
      console.log(e.message); // ??
  })
  .catch(e => {
      console.log(e.message); // ??
  });
```


```javascript
console.log('start');

const promise1 = Promise.resolve().then(() => {
  console.log('promise1');
  const timer2 = setTimeout(() => {
  console.log('timer2')
  }, 0)
});

const timer1 = setTimeout(() => {
  console.log('timer1')
  const promise2 = Promise.resolve().then(() => {
  console.log('promise2')
  })
}, 0)

console.log('end');
```

3. Написать функцию которая выполнит это:

```javascript
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
```

4. Анаграмма:
For example: Mary is an anagram of Army

5. How to empty an array in JavaScript?

6. Палиндром

```javascript
palindrome('racecar')  ===  true
palindrome('table')  ===  false
```

7. Символ в строке:
Наиболее часто используемый символ в строке. Напишите функцию, которая принимает строку и возвращает наиболее часто используемый в ней символ.
