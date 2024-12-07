const button = document.querySelector("button")!;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  if (input1.value !== "" && input2.value !== "")
    console.log(add(+input1.value, +input2.value));
});

// Break
let number1: number;
number1 = 4;
console.log({ number1 });

// Break
// automatically get type inference
const person = {
  name: "sandy",
  age: 29,
  hobbies: ["Coding", "Cooking"],
  role: [2, "author"],
};

for (let hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

// Break
person.role.push("admin");
person.role[0] = 10;
console.log({ person });

// Tuple
const description: [number, string] = [29, "Down to Earth"];
// Exception
description.push("smart");
console.log(description);

// Enums
enum Role {
  ADMIN = 10,
  READ_ONLY,
  AUTHOR,
}
console.log("enum", Role.READ_ONLY);

// Any
let names: any[];
names = ["sandy", "ria"];
console.log(names[0]);

// Union Types & literal Types
type Combinable = string | number;
type Conversion = "as-number" | "as-text";

function combine(n1: Combinable, n2: Combinable, resultConversion: Conversion) {
  // Added runtime type check
  if (
    (typeof n1 === "number" && typeof n2 === "number") ||
    resultConversion === "as-number"
  ) {
    return +n1 + +n2;
  }
  return n1.toString() + n2.toString();
}

const combinedAges = combine(30, 60, "as-number");
console.log({ combinedAges });

const combinedStringAges = combine("Max", "Anna", "as-text");
console.log({ combinedStringAges });
