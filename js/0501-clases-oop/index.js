class Auth {
  login() {
    console.log('login');
  }
}

class User extends Auth  {
  num = 0;
  email = 0;

  constructor(email, num = 0) {
    super()
    this.email = email;
    if (num === 0) {
      this.num = 1000;
    } else {
      this.num = 50;
    }
  }

  plus(value) {
    this.num += value;
  }

  minus(num) {
    this.num -= value;
  }

  result() {
    super.login(this.email);
    return this.num;
  }
}


const user = new User('romanrostislavovich@gmail.com');
// 0
user.plus(2);
// 2
user.plus(2)
// 4
user.plus(10);
// 14
