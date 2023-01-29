const profile = {
  uname: "Alex",
  age: 20,
  cord: {
    lng: 0,
    lat: 15,
  },
  setAge(age: number): void {
    this.age = age;
    console.log(age);
  },
};

// destructuring
const { age, uname }: { age: number; uname: string } = profile;

profile.setAge(12);
// because of destructuring its 20
console.log(age);
console.log(profile.age);
