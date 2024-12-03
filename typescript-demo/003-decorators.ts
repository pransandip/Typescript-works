// decorator factory
function Login(msg: string) {
  return function (constructor: Function) {
    console.log(msg);
  };
}

@Login(`login first to get access of User class`)
class User {
  name: string;
  email: string;

  constructor(n: string, e: string) {
    this.name = n;
    this.email = e;
  }

  getDetails(this: User) {
    return this;
  }
}

const u = new User('Sandy Roy', 'pransandip@gmail.com');
console.log(u.getDetails());
