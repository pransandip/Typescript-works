// decorator factory
function MyDecorator(constructor: Function) {
  console.log(`class is creating`);
}

@MyDecorator
class Box {
  name: string;
  email: string;

  constructor(n: string, e: string) {
    this.name = n;
    this.email = e;
  }

  getDetails(this: Box) {
    return this;
  }
}

const b = new Box('Sandy Roy', 'pransandip@gmail.com');
console.log(b.getDetails());
