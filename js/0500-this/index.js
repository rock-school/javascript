const user = {
  name: 'Max',
  hi: function() {
    console.log('Hello' + this.name)
  }
}

user.hi2 = function() {
  console.log('Hello' + this.name)
}

const user2 = {
  name: 'Max2',
  hi: function() {
    console.log('Hello' + this.name)
  }
}

user.hi();
user.hi2();
user2.hi();

// Глобальная this
function func() {
  this.name = 'sdfs';
  const name = 'safas';
  console.log(this) // WINDOW
}
func();

/*
"это специальная ""запись"", которая создаётся при вызове функции с помощью new. Она содержит информацию о том, как была вызвана функция, где была вызвана (call stack), с какими параметрами и тд. Одним свойств этой записи является this. this определяется во время вызова функции. Обычно есть 4 ситуации, которые по своему определяют this:

1. вызов с помощью new: var bar = new foo(), тогда this = новый созданный объект
2. вызов как свойство объекта obj.foo(), тогда this = obj
3. вызов с помощью call/apply, тогда this=объекту указанному в аргумете
4. и deafult байндинг this, когда мы просто вызываем функцию foo(), тогда this равен undefined в strict mode, а не strict mode - глобальному объекту
5. Контекст можно потерять!!!

  И отдельно стоит упомянуть bind"
  */

const button = document.getElementById('#button');

button.onclick = function() {
  console.log(this);
}

/*
Function methods:
"// toString()
// call
// bind
bind - прибывает контекст к фукнции и возвращает новую фукнцию (а также можно забандить определенные аргументы), aplly и call вызывают фукнцию с определенный контекстом. Разница только в том, что `call` принимает арументы, а `apply` массивоподобный обьек. Нельзя второй раз bind сделать
// apply "
 */

/*LINKS
1. https://medium.com/nuances-of-programming/%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%BE%D0%B2-bind-call-and-apply-%D0%B2-javascript-77ec312b1ec9
2. https://www.youtube.com/watch?v=wU5GJv9lq-I*/


