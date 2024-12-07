// * number
const userID: number = 23564.3;

// * here its only give methods related to numbers
console.log(userID.toPrecision(2));
console.log(userID.toFixed());

// * boolean
const isLoggedIn: boolean = !!!true;
console.log(isLoggedIn.valueOf());


/*----------BREAK-----------*/
let hero: string;

function getHero() {
  return "thor";
}

hero = getHero();
console.log(hero);

/*----------BREAK-----------*/
let logIn = (name: string, email: string, isPaid: boolean = false) => {
  console.log(name);
  console.log(email);
  console.log(isPaid);
};
logIn("s", "s@s.com");

/*----------BREAK-----------*/
// * never: some functions never return a value
function fail(msg: string): never {
  throw new Error(msg);
}

// * Type Alias
// * returns the same object type
type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser(user: User): User {
  return user;
}

const user1 = createUser({ name: "", email: "", isActive: true });
console.log(user1);
