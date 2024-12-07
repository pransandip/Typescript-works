const score: Array<number> = [];
const charters: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

// Break
function identityTwo<Type>(val: Type): Type {
  return val;
}
const idn = identityTwo<string>("sandy");

// Break
function identityThree<T extends number>(val: T[]): T[] {
  return [...val].sort((a, b) => b - a);
}
const reverse = identityThree([1, 2, 3]);
console.log(reverse);

// Break
interface Bottle {
  brand: string;
  type: string;
}

function identityFour<T>(val: T): T[] {
  return [val, val];
}
const btl = identityFour<Bottle>({ brand: "x", type: "gym" });

// Break
function getSearchProduct<T>(product: Array<T>): T {
  return product[0];
}
