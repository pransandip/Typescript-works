class Employee {
  id!: number;
  name!: string;
  address!: string;
}

let john = new Employee();
console.log(john);

john.id = 1;
john.name = 'john bolt';
john.address = 'Africa';
console.log(john);

// private only available within class
// Protected will be available within the class
// and classes which extends this class

interface Address {
  street: string;
  pin: number;
  city: string;
  state: string;
}

class Factory {
  #id: number;
  protected name: string;
  model: string;
  address: Address;

  constructor(id: number, name: string, model: string, address: Address) {
    this.#id = id;
    this.name = name;
    this.model = model;
    this.address = address;
  }

  get details() {
    return `id: ${this.#id} | name: ${this.name} | model: ${this.model}`;
  }

  static start() {
    return `start`;
  }
}

let toy = new Factory(10, 'Avatar', 'AV-001', {
  city: 'Calcutta',
  pin: 700040,
  state: 'WB',
  street: 'Golf Green',
});
console.log(toy);
console.log(toy.details);
console.log(Factory.start());

// Break
class Plant extends Factory {
  constructor(id: number, name: string, model: string, address: Address) {
    super(id, name, model, address);
  }
}
const p = new Plant(2, 'Thermal', 'TH-006', {
  city: 'Calcutta',
  pin: 700040,
  state: 'WB',
  street: 'Golf Green',
});
