// public: This method can be called any where any time

// private: This method can only be called by other
// methods in this class

// protected: This method can be called by other
// methods in this class, or by other methods in
// child classes

class Vehicle {
  constructor(public color: string) {}

  public honk(): void {
    console.log("beep");
  }

  protected start(): void {
    console.log("chugga chugga");
  }
}

class Bus extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  // when we don't want developers to call this
  // methods then we make it private

  private drive(): void {
    console.log("vroom");
  }

  public startDrivingProcess(): void {
    this.start();
    this.drive();
  }
}

const b = new Bus(4, "red");
b.startDrivingProcess();
b.honk();
console.log(b.color);
