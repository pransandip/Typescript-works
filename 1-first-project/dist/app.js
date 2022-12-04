"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const getTotal = (numbers) => numbers.reduce((a, c) => a + c, 0);
console.log(getTotal([1, 2, 3]));
const user = {
    firstName: 'Sandy',
    lastName: 'Ry',
    role: 'Admin'
};
console.log(user.firstName);
const persons = {
    name: 'Sandy Ry',
    age: 28,
};
function login(userData) {
    return userData;
}
console.log(login({ name: 'Sandy Ry', age: 28 }));
const userId = 123;
const transaction1 = {
    payerAccountNumber: 123456,
    payeeAccountNumber: 789101,
};
const transaction2 = {
    payerAccountNumber: 123456,
    payeeAccountNumber: 121314,
};
const bankAccount = {
    accountNumber: 123456,
    accountHolder: 'Sandip roy',
    balance: 1523585,
    isActive: true,
    transactions: [transaction1, transaction2]
};
const book = {
    name: 'Code dummy',
    price: 1999,
    fileSize: 300,
    format: 'pdf',
    duration: 5,
};
const noteBook = {
    name: 'Grand copy',
    price: 235,
    size: 40,
};
function printId(id) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
printId(1235);
const getFirstThree = (x) => {
    return x.slice(0, 3);
};
console.log(getFirstThree([1, 2, 3, 2, 5, 5]));
/** Generics */
const logString = (arg) => {
    console.log(arg);
    return arg;
};
console.log(logString('abc'));
const logArray = (arg) => {
    console.log(arg);
    return arg;
};
console.log(logArray(['🍎', '🍏', '🍌', '🍉']));
const logAnything = (arg) => {
    console.log(arg);
    return arg;
};
console.log(logAnything([1, 'a']));
// function getOldest(people: HasAge[]): HasAge {
//     return people.sort((a, b) => b.age - a.age)[0];
// }
function getOldest(people) {
    return people.sort((a, b) => b.age - a.age)[0];
}
const people = [
    { age: 30 },
    { age: 40 },
    { age: 50 },
];
console.log(getOldest(people));
const player = [
    { name: 'John', age: 28 },
    { name: 'Joe', age: 35 },
    { name: 'Rone', age: 40 },
];
// forcefully asserting return type as Player
const person1 = getOldest(player);
console.log(person1);
const person2 = getOldest(people);
console.log(person2);
const person3 = getOldest(player);
console.log(person3);
const fetchPostData = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`http://example.com/${path}`);
    return response.json();
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield fetchPostData('posts');
    posts[0];
}))();
const fetchData = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`http://example.com/${path}`);
    return response.json();
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield fetchData('posts');
}))();
const userLogin = (credentials) => {
    console.log(credentials);
    return true;
};
const user1 = {
    username: 'sandy',
    password: 'secret',
    isAdmin: true,
};
userLogin(user1);
const auth = {
    username: 'sandy001',
    password: 'secret',
    login(username, password) {
    }
};
