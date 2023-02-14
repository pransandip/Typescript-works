// * private property only be accessible within the class
class Person {
  name: string;
  email: string;
  private readonly city: string = "Kolkata";

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  printCity() {
    return this.city;
  }
}

const pr1 = new Person("sandy ry", "s@s.com");
console.log(pr1);
console.log(pr1.printCity());

/*----------BREAK-----------*/

class Flight {
  constructor(
    public name: string,
    public email: string,
    private seat: number = 2
  ) {}

  get getSeat(): number {
    return this.seat;
  }

  // * when you using setters do not add any return type
  set setSeat(seatNum: number) {
    if (seatNum <= 1) {
      throw new Error("Seat count should be more than 1");
    } else {
      this.seat = seatNum;
    }
  }
}

const flt = new Flight("Indigo", "in@in.com");
console.log(flt);
console.log(flt.getSeat);
console.log((flt.setSeat = 2));
console.log(flt);

// * object instanceof constructor
console.log(flt instanceof Flight);
console.log(flt instanceof Object);
