let age: number = 20;
if (age < 50) {
  age += 10;
}

console.log({ age });

// (function age(document: string) {
//   console.log(document);
// })("1234 get on the dance floor");

// const list: (number | string)[] = [1, 2, 3, "four", "five"];
// console.log(list.pop());
// console.log(list);

// let numbers: number[] = [1, 2, 3, 4, 5, 6];
// numbers.forEach((n) => {
//   console.log(n);
// });

// // Tuples
// let user: [number, string] = [1.02589, "sandy"];
// console.log(user[0].toFixed(2));
// console.log(user[1].toLocaleUpperCase());
// user.push(1); // this is a gap in typescript
// console.log({ user });

// //Enums
// const enum Size {
//   Small = 1,
//   Medium,
//   Large,
// }
// let small: Size = Size.Small;
// let medium: Size = Size.Medium;
// let large: Size = Size.Large;
// console.log({ small, medium, large });

// function calculateTax(income: number, taxYear = 2022): number {
//   if (taxYear < 2022) return income * 2;
//   return income;
// }
// console.log(calculateTax(12_000));

// function msg(txt: string): string {
//   return txt === "sandy" ? "Hi sandy" : "plz Login";
// }
// console.log(msg("sandy"));

// return promise;
// async function fetchData(): Promise<{}> {
//   const [postResponse, albumsResponse] = await Promise.all([
//     fetch(`https://jsonplaceholder.typicode.com/posts`),
//     fetch(`https://jsonplaceholder.typicode.com/albums`),
//   ]);

//   const posts = await postResponse.json();
//   const albums = await albumsResponse.json();
//   return { posts, albums };
// }

// fetchData().then((result) => {
//   console.log(result);
// });

// console.log(Date.now());

// let employee: {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// } = {
//   id: 1,
//   name: "Sandip Roy",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };
// employee.retire(new Date());
// console.log(employee);
