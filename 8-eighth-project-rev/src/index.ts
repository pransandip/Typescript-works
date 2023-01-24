// const num1: number = 2;
// const calculate = (num1: number, num2: number) => {
//     return num1 + num2;
// }
// console.log(calculate(num1, 1));


// const getTotal = (numbers: number[]) => {
//     return numbers.reduce((acc, item) => acc + item, 0)
// }
// console.log(getTotal([3, 2, 1]))


/** Generics */
// const getTotal2 = (numbers: Array<number>) => {
//     return numbers.reduce((acc, item) => acc + item, 0)
// }
// console.log(getTotal2([3, 3, 3]))


// const user = {
//     firstName: 'Sandip',
//     lastName: 'Roy',
//     role: 'dev'
// }
// console.log(`Name: ${user.firstName} ${user.lastName}`)


/** Types & Type alias */
// type User = {
//     name: string;
//     age: number;
//     address?: string;
// }

// const newUser: User = {
//     name: 'Sandy001',
//     age: 27,
//     address: 'Main street'
// }
// console.log({ newUser })


// function login(userdata: User): User {
//     return userdata;
// }
// console.log(login({
//     name: 'Alex',
//     age: 25,
//     address: 'park street'
// }))


// const names: string[] = [];
// console.log(names.push('item1'))
// console.log(names.length = 5)
// console.log(names)

const logs: readonly string[] = ["log1", "log2"];
console.log(logs)