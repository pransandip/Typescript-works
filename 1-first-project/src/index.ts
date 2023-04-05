const getTotal = (numbers: Array<number>) => numbers.reduce((a, c) => a + c, 0);
console.log(getTotal([1, 2, 3]));

const user = {
  firstName: "Sandy",
  lastName: "Ry",
  role: "Admin",
};
console.log(user.firstName);

/** number, string, arr[], boolean (inbuilt types)
 *  Type Alias (custom types) */
type User = {
  name: string;
  age: number;
  address?: string;
};

const persons: User = {
  name: "Sandy Ry",
  age: 28,
  address: "Kolkata 700040",
};
delete persons["address"];
console.log(persons);

function login(userData: User): User {
  return userData;
}
console.log(login({ name: "Sandy Ry", age: 28 }));

/** primitives */
type ID = number | string;
const userId: ID = 123;

console.log(userId);

/** Interfaces (Interfaces uses in object) */
interface Transaction {
  payerAccountNumber: number;
  payeeAccountNumber: number;
}

interface BankAccount {
  accountNumber: number;
  accountHolder: string;
  balance: number;
  isActive: boolean;
  transactions: Transaction[];
}

const transaction1: Transaction = {
  payerAccountNumber: 123456,
  payeeAccountNumber: 789101,
};
const transaction2: Transaction = {
  payerAccountNumber: 123456,
  payeeAccountNumber: 121314,
};

const bankAccount: BankAccount = {
  accountNumber: 123456,
  accountHolder: "Sandip roy",
  balance: 15_23_585,
  isActive: true,
  transactions: [transaction1, transaction2],
};

console.log(bankAccount);

// * Extends
interface Book {
  name: string;
  price: number;
}

interface EBook extends Book {
  // name: string;
  // price: number;
  fileSize: number;
  format: string;
}

interface AudioBook extends EBook {
  // name: string;
  // price: number;
  // fileSize: number;
  // format: string;
  duration?: number;
}

const book: AudioBook = {
  name: "Code dummy",
  price: 1999,
  fileSize: 300,
  format: "pdf",
  duration: 5,
};

const { name: name1, price }: AudioBook = book;
console.log(name1);
console.log(price);

// * merging
interface NoteBook {
  name: string;
  price: number;
}
interface NoteBook {
  size: number;
}

const noteBook: NoteBook = {
  name: "Grand copy",
  price: 235,
  size: 40,
};

// Unions
type UID = number | string;

function printId(id: UID) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}
printId(1235);
printId("abc");

const getFirstThree = (x: string | number[]): string | number[] => {
  return x.slice(0, 3);
};
console.log(getFirstThree([1, 2, 3, 2, 5, 5] || "abcd"));

/** Generics */
const logString = (arg: string) => {
  console.log(arg);
  return arg;
};
console.log(logString("abc"));

const logArray = (arg: unknown[]) => {
  console.log(arg);
  const newArr: string[] = arg;
  return arg.slice(0, 2);
};
console.log(logArray(["🍎", "🍏", "🍌", "🍉"]));

const logAnything = <T>(arg: T): T => {
  console.log(arg);
  return arg;
};
console.log(logAnything([1, "a"]));

interface HasAge {
  age: number;
}

// function getOldest(people: HasAge[]): HasAge {
//     return people.sort((a, b) => b.age - a.age)[0];
// }
function getOldest<T extends HasAge>(people: T[]): T {
  return people.sort((a, b) => b.age - a.age)[0];
}

const people: HasAge[] = [{ age: 30 }, { age: 40 }, { age: 50 }];
console.log(getOldest(people));

/** Assertion */

interface Player {
  name: string;
  age: number;
}
const player: Player[] = [
  { name: "John", age: 28 },
  { name: "Joe", age: 35 },
  { name: "Rone", age: 40 },
];

// forcefully asserting return type as Player
const person1 = getOldest(player) as Player;
console.log(person1);

const person2 = getOldest(people);
console.log(person2);

const person3 = getOldest(player);
console.log(person3);

interface IPost {
  title: string;
  id: number;
  description: string;
}

interface IUser {
  name: string;
  age: number;
  description: string;
}

const fetchPostData = async (path: string): Promise<IPost[]> => {
  const response = await fetch(`http://example.com/${path}`);
  return response.json();
};

(async () => {
  const posts = await fetchPostData("posts");
  posts[0];
})();

const fetchData = async <ResultType>(path: string): Promise<ResultType> => {
  const response = await fetch(`http://example.com/${path}`);
  return response.json();
};

(async () => {
  const posts = await fetchData<IUser[]>("posts");
})();

// Structural typing or duck typing
interface ICredentials {
  username: string;
  password: string;
  isAdmin?: boolean;
}

const userLogin = (credentials: ICredentials) => {
  console.log(credentials);
  return true;
};

const user1: ICredentials = {
  username: "sandy",
  password: "secret",
  isAdmin: true,
};

userLogin(user1);

interface IAuth {
  username: string;
  password: string;
  login(username: string, password: string): void;
}

const auth: IAuth = {
  username: "sandy001",
  password: "secret",
  login(username: string, password: string) {},
};
