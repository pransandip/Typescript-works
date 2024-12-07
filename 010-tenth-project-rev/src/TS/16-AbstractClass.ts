// * with abstract class you can't create a object
// * you can only create obj from inherited class

abstract class Factory {
  constructor(public name: string, public model: string, public year: number) {}

  abstract get getCarDetails(): string;

  getManufacturingTime(): number {
    return this.year * 2;
  }
}

class Manufacture extends Factory {
  constructor(
    public name: string,
    public model: string,
    public year: number,
    public speed: number
  ) {
    super(name, model, year);
  }

  get getCarDetails(): string {
    return `${this.name} ${this.model} kmph: ${this.speed}/hr`;
  }

  // * its overriding
  getManufacturingTime(): number {
    return this.year * 3;
  }
}

const car = new Manufacture("kurd", "x40", 2021, 300);

console.log(car);
console.log(car.getCarDetails);
console.log(car.getManufacturingTime());
