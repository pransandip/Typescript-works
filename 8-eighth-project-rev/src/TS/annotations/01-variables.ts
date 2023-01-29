// Type Annotation: Code we add to tell typescript
// what type of value a variable refer to.
// *we (developers) tell Typescript the type

// Type Inference: Typescript tries to figure out
// what type of value a variable refers to.
// *Typescript guesses the types

const apples: number = 123;
const nothing: null = null;
const und: undefined = undefined;

// Built in objects
let now: Date = new Date();

// Array
const fruits: string[] = ["Kiwi", "Peach", "Orange"];
console.log(fruits);

// Classes
class Car {}
const car: Car = new Car();

// Objects literal
const point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (n: number) => void = (n: number) => {
  console.log(n);
};

/*------When to use Type Annotation------*/

// 1.) Function that returns the "any" Type
const json_data = '{"x":10, "y":20}';
const res: { x: number; y: number } = JSON.parse(json_data);
console.log(res);

// 2.) When we declare a variable on one line and initialize it later
const words = ["red", "green", "blue"];
let foundWord: boolean;
// let foundWord = false;   //(best to use)

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3.) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
console.log(numberAboveZero);
