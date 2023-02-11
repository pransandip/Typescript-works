function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return val + 3;
}

/*---------BREAK-----------*/

function provideId(id: string | null) {
  if (!id) {
    console.log("please provide ID");
    return;
  }
  return id.toLowerCase();
}

// * Break

if (null) {
  console.log(typeof null);
}

/*---------BREAK-----------*/

interface User007 {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: User007 | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}

/*---------BREAK-----------*/

// * this is only work with new keyword
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

/*---------BREAK-----------*/

/**
 * * It's a user-defined type guard. It means that when
 * * calling isFish, TypeScript knows to narrow down
 * * the type to string if it returns true.
 * */

// * * An example:

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "fish food";
  } else {
    pet;
    return "Bird food";
  }
}

/**
 * * If the function doesn't define a custom type guard, the
 * * type inside the if block would still be Fish | Bird
 * * and calling toLowerCase() would produce an error.
 */

// ! With the type guard, the compiler narrows down the type to Fish inside the if block.
// ! A type predicate is just used in compile time. The resulting .js file (runtime) will
// ! have no difference because it does not consider the TYPE.
