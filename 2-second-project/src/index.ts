// import { hey } from './helper.js';
// import yo from './helper.cjs'
// import * as fs from 'fs';

// console.log({ yo })
// console.log({ hey })
// console.log(1, 2, 3)

/*---------BREAK-----------*/
let hobbies: string[];
let role: [number, string]; // tuple (contains fixed amount of type that has been declared)
let status: string | number;
let obj: object;
let user: unknown;
let printAge1: Function;
let printAge2: (val: string) => void; // void returns undefined but 'never' type return nothing
let printAge3: (val: string) => never; // void returns undefined but 'never' type return nothing

hobbies = ["s", "a"];
role = [1, "sa"];
status = "active";

printAge2 = (val: string) => {
  // console.log({ val })
};
console.log(printAge2("abc"));

printAge3 = (val: string): never => {
  throw new Error();
};

/*---------BREAK-----------*/
type Person = {
  name: string;
  age?: number;
};

let person: Person = {
  name: "Sandip Roy",
  age: 28,
};

let lotsOfPeople: Person[] = [
  {
    name: "Avi Roy",
    age: 24,
  },
  {
    name: "Sandy Roy",
  },
];
console.log(lotsOfPeople);

/*---------BREAK-----------*/
const printStatus = (status: string) => {
  console.log({ status });
};
printStatus(status);

type x = {
  a: string;
  b?: number;
};

type y = x & {
  c: string;
  d: boolean;
};

let z: y = {
  c: "s",
  d: true,
  a: "sa",
};

interface Role {
  name: string;
  age?: number;
}

interface Guy extends Role {
  position: string;
}

interface Guy2 extends y {
  location: number;
}
