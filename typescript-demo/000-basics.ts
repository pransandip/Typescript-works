// Type Inference
let num = 10;
console.log(num);

let emptyList: string[];
emptyList = ['sandy', 'alex'];
emptyList;

let numList: Array<number>;
numList = [44, 55, 99];
const res = numList.find(num => num === 55);

// Enums
const enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
console.log(c);

// Tuple
let numberList: [firstNumber: number, secondNumber: number];
function swapNumber(num1: number, num2: number): [number, number] {
  return [num2, num1];
}
numberList = swapNumber(22, 33);
console.log(numberList[0]);
console.log(numberList[1]);
// console.log(numberList[2]); // undefined

// Functions
function addNum(num1: number, num2: number, num3?: number) {
  return num1 + num2;
}
addNum(12, 12);

// Rest parameter
function add2(num1: number, num2: number, ...num3: number[]) {
  return num1 + num2 + num3.reduce((a, it) => a + it, 0);
}
console.log(add2(1, 2, 3, 6, 6));

// Generics
function getItems<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

let concatResult = getItems<number>([1, 2, 3, 4]);
let concatString = getItems<string>(['s', 'a', 'n', 'd', 'y']);
console.log(concatString);

// Interface

interface IUser {
  name: string;
  age: number;
  weight: string;
}

let [user1, user2, ...restUsers]: IUser[] = [
  { name: 'sandy', age: 28, weight: '58kg' },
  { name: 'Alex', age: 28, weight: '68kg' },
  { name: 'John', age: 28, weight: '68kg' },
  { name: 'Dop', age: 28, weight: '68kg' },
];

console.log(user1);
console.log(user2);
console.log(restUsers);
