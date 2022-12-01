const getTotal = (numbers: Array<number>) => numbers.reduce((a, c) => a + c, 0)
console.log(getTotal([1, 2, 3]))

const user = {
    firstName: 'Sandy',
    lastName: 'Ry',
    role: 'Admin'
}
console.log(user.firstName)



/** number, string, arr[], boolean (inbuilt types) 
 *  Type Alias (custom types) */
type User = {
    name: string;
    age: number;
    address?: string;
}

const persons: User = {
    name: 'Sandy Ry',
    age: 28,
}

function login(userData: User): User {
    return userData;
}
console.log(login({ name: 'Sandy Ry', age: 28 }))


/** primitives */
type ID = number | string;
const userId: ID = 123;



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
    transactions: Transaction[]
}

const transaction1: Transaction = {
    payerAccountNumber: 123456,
    payeeAccountNumber: 789101,
}
const transaction2: Transaction = {
    payerAccountNumber: 123456,
    payeeAccountNumber: 121314,
}

const bankAccount: BankAccount = {
    accountNumber: 123456,
    accountHolder: 'Sandip roy',
    balance: 15_23_585,
    isActive: true,
    transactions: [transaction1, transaction2]

}

// Extend
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
    name: 'Code dummys',
    price: 1999,
    fileSize: 300,
    format: 'pdf',
    duration: 5,
}


// merging
interface NoteBook {
    name: string;
    price: number;
}
interface NoteBook {
    size: number,
}

const noteBook: NoteBook = {
    name: 'Grand copy',
    price: 235,
    size: 40,
}


// Unions
type UID = number | string;

function printId(id: UID) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase())
    } else {
        console.log(id)
    }
}
printId(1235);


const getFirstThree = (x: string | number[]) => {
    return x.slice(0, 3)
}
console.log(getFirstThree([1, 2, 3, 2, 5, 5]))


// Generics
const logString = (arg: string) => {
    console.log(arg);
    return arg;
}
console.log(logString('abc'))


const logArray = (arg: any[]) => {
    console.log(arg)
    return arg
}
console.log(logArray(['🍎', '🍏', '🍌', '🍉']))


const logAnything = <T>(arg: T): T => {
    console.log(arg)
    return arg
}
console.log(logAnything([1, 'two']))
