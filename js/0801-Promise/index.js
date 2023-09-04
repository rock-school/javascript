// Promise - Объект Promise используется для отложенных и асинхронных вычислений.
/*

Интерфейс Promise (промис) представляет собой обёртку для значения, неизвестного на момент создания промиса.
Он позволяет обрабатывать результаты асинхронных операций так, как если бы они были синхронными: вместо конечного
результата асинхронного метода возвращается своего рода обещание (дословный перевод слова "промис") получить результат в некоторый момент в будущем.

Promise может находиться в трёх состояниях:

ожидание (pending): начальное состояние, не исполнен и не отклонён.
исполнено (fulfilled): операция завершена успешно.
отклонено (rejected): операция завершена с ошибкой.

 */

const error = Promise.reject('error');
const success = Promise.resolve('yeap');

let myFirstPromise = new Promise((resolve, reject) => {
  // Мы вызываем resolve(...), когда асинхронная операция завершилась успешно, и reject(...), когда она не удалась.
  // В этом примере мы используем setTimeout(...), чтобы симулировать асинхронный код.
  // В реальности вы, скорее всего, будете использовать XHR, HTML5 API или что-то подобное.
  setTimeout(function () {
    resolve("Success!"); // Ура! Всё прошло хорошо!
  }, 250);
})
  .then()
  .catch()
  .finally()
;


/*
!!!!!!!!!!!!!!!!!!!!
Race
- Promise.race(iterable)
Ожидает исполнения или отклонения любого из полученных промисов.

  Возвращает промис, который будет исполнен или отклонён с результатом исполнения первого исполненного или отклонённого промиса из iterable.
 */

myFirstPromise.then((successMessage) => {
  // successMessage - это что угодно, что мы передали в функцию resolve(...) выше.
  // Это необязательно строка, но если это всего лишь сообщение об успешном завершении, это наверняка будет она.
  console.log("Ура! " + successMessage);
});

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// Expected output: "two"

/* END RACE */

/*
!!!!!!!!!!

- Promise.allSettled(iterable)
Ожидает завершения всех полученных промисов (как исполнения так и отклонения).
Возвращает промис, который исполняется когда все полученные промисы завершены (исполнены или отклонены), содержащий массив результатов исполнения полученных промисов.

 */
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];

Promise.allSettled(promises).then((results) => results.forEach((result) => console.log(result.status)));

// Expected output:
// "fulfilled"
// "rejected"

/* END ALL_SETTELED */

/*
!!! !!!!!!!!!!!!!!!!!!
ALL
- Promise.all(iterable)
Ожидает исполнения всех промисов или отклонения любого из них.

  Возвращает промис, который исполнится после исполнения всех промисов в iterable. В случае, если любой из промисов будет отклонён, Promise.all будет также отклонён.
*/
var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values);
});

//Выведет:
// [3, 1337, "foo"]

/*
ЗАДАЧИ
https://habr.com/ru/companies/otus/articles/686670/
https://habr.com/ru/articles/582914/
 */

