class Family {
  constructor(
    public name: string,
    public location: string,
    // private members: number = 2
    protected members: number = 2
  ) {}

  get getMember(): number {
    return this.members;
  }
}

// * with protected we can access property within class
// * and in inherited class, not out side of the class

class SubFamily extends Family {
  public city: string = "Kolkata";

  set setMember(num: number) {
    this.members = num;
  }
}

const family1 = new SubFamily("Majumdar", "Tollygunge", 5);

console.log(family1);
family1.setMember = 10;
console.log((family1.city = "Delhi"));

console.log(family1);
