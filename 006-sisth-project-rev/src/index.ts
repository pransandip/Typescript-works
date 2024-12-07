let age: number = 20;
if (age < 50) {
  age += 10;
}
console.log({ age });

console.log(Date.now());

/*---------BREAK-----------*/

(function dance(document: string) {
  console.log(document);
})("1234 get on the dance floor");

function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) return income * 2;
  return income;
}
console.log(calculateTax(12_000));

function msg(txt: string): string {
  return txt === "sandy" ? "Hi sandy" : "plz Login";
}
console.log(msg("sandy"));

/*---------BREAK-----------*/

const list: (number | string)[] = [1, 2, 3, "four", "five"];
console.log(list.pop());
console.log(list);

let numbers: number[] = [1, 2, 3, 4, 5, 6];
numbers.forEach((n) => {
  console.log(n);
});

let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Sandip Roy",
  retire: (date: Date) => {
    console.log(date);
  },
};
employee.retire(new Date());
console.log(employee);

/*---------BREAK-----------*/

interface User888 {
  name: string;
  age: number;
}

const user: User888 = {
  name: "sandy",
  age: 28,
};

const userData = (data: User888): User888 => {
  return data;
};

/*---------BREAK-----------*/

const getTotal = (numbers: Array<number>): number => {
  return numbers.reduce((a, c) => {
    return a + c;
  }, 0);
};

console.log(getTotal([3, 3, 3]));

/*---------BREAK-----------*/

// * Unions
// ! Narrowing

type ID = number | string;

function printID(id: ID) {
  if (typeof id === "string") {
    return id.toUpperCase();
  }
  return id;
}

console.log(printID("abc"));

const getFirstThree = (x: string | number[]) => {
  return x.slice(0, 3);
};

/*---------BREAK-----------*/

// * Tuples
let _user: [number, string] = [1.02589, "sandy"];
console.log(_user[0].toFixed(2));
console.log(_user[1].toLocaleUpperCase());
_user.push(1); // this is a gap in typescript
console.log({ _user });

// * Enums
const enum Size {
  Small = 1,
  Medium,
  Large,
}
let small: Size = Size.Small;
let medium: Size = Size.Medium;
let large: Size = Size.Large;
console.log({ small, medium, large });

/*---------BREAK-----------*/

// * Generics
function logAnything<T>(arg: T): T {
  return arg;
}
console.log(logAnything([1, 3]));

interface HasAge {
  age: number;
}

const getOldest = (people: HasAge[]): HasAge => {
  return people.sort((a, b) => b.age - a.age)[0];
};

const getOldest2 = <T extends Player>(people: T[]): T => {
  return people.sort((a, b) => b.age - a.age)[0];
};

const temp = new Array({ age: 24 }, { age: 28 }, { age: 30 });
console.log(getOldest(temp));

// * Assertion: not good practice
interface Player {
  name: string;
  age: number;
}

const players: Player[] = new Array(
  { name: "Tom", age: 24 },
  { name: "dick", age: 28 },
  { name: "Harry", age: 30 }
);

// * We are asserting return type Obj as Player
const person = getOldest(players) as Player;
console.log(person.name);

const person2 = getOldest2(players);
console.log(person2);

/*---------BREAK-----------*/

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchPostData = async (url: string): Promise<IPost[]> => {
  const res = (await fetch(url)).json();
  return res;
};

(async () => {
  const data = await fetchPostData(
    `https://jsonplaceholder.typicode.com/posts`
  );
  console.log(data[0].title);
})();

/*---------BREAK-----------*/

const fetchData = async <T>(url: string): Promise<T> => {
  const res = (await fetch(url)).json();
  return res;
};

(async () => {
  const data = await fetchData<IPost[]>(
    `https://jsonplaceholder.typicode.com/posts`
  );
  console.log(data[0].title);
})();

/*---------BREAK-----------*/
// TODO: return promise

async function fetchDataAll(): Promise<{}> {
  const [postResponse, albumsResponse] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/posts`),
    fetch(`https://jsonplaceholder.typicode.com/albums`),
  ]);

  const posts = await postResponse.json();
  const albums = await albumsResponse.json();
  return { posts, albums };
}

fetchDataAll().then((result) => {
  console.log(result);
});
