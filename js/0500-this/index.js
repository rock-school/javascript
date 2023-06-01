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
  console.log(this) // WINDOW
}
func();

const button = document.getElementById('#button');

button.onclick = function() {
  console.log(this);
}

/*
Function methods:
"// toString()
// call
// bind
// apply "
 */


