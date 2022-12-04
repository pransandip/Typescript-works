let greetings: string = 'Hi sandy'
console.log(greetings)

let Authenticated: boolean = true
console.log(Authenticated.valueOf())

const getUpper = (val: string): string[] => val.toUpperCase().split("")
console.log(getUpper('sandy'))


const logIn = (name: string, email: string, verified: boolean = false): void => {
    console.log({ name })
    console.log({ email })
    console.log({ verified })
}
logIn('sandy', 'pransandip@gmail')


const getValue = (val: number): boolean | string => {
    if (val > 5) return true;
    return "200 OK"
}
console.log(getValue(5))


const heroes = ['Batman', 'superman', 'spiderman']
console.log(heroes.map((o): string => `hero is ${o}`))



function handleError(err: string): never {
    throw new Error(err)
}

try {
    const a = 5;
    // b;
    console.log(a)

} catch (error) {
    handleError(error)
}


function createCourse(): { name: string, price: number } {
    return { name: 'YBook', price: 2335 }

}


type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
}

const myUser: User = {
    _id: "1234",
    name: "s",
    email: "s@s.com",
    isActive: false,
}

console.log(myUser)

myUser.email = "sandy@mail.com"
// myUser._id = "san"

const subject: Array<string> = []
const marks: Array<number> = []

function identity<Type>(val: Type): Type {
    return val
}

identity(3)