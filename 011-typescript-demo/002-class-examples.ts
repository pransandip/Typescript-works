interface Login {
  login(): { userId: string; pass: string };
}

class Car implements Login {
  private id: number;
  protected name: string;
  model: string;

  constructor(id: number, name: string, model: string) {
    this.id = id;
    this.name = name;
    this.model = model;
  }

  get details() {
    return `id: ${this.id} | name: ${this.name} | model: ${this.model}`;
  }

  login(): { userId: string; pass: string } {
    return { userId: `${this.id}:${this.model}`, pass: 'sandy@007' };
  }

  static start() {
    return `engine started`;
  }
}

let benz = new Car(1, 'MercedesBenz', 'X-001');

console.log(benz.login());
console.log(Car.start());
console.log(benz.details);
