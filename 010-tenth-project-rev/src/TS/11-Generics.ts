const scores: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: number | boolean): number | boolean {
  return val;
}

function Two(val: any): any {
  return val;
}

// * Whenever you send a value as input is got locked
function identityThree<Type>(val: Type): Type {
  return val;
}

identityThree(3);

// * you can add your own type it's generics
function identityFour<T>(val: T): T {
  return val;
}

interface bottle {
  brand: string;
  type: number;
}

identityFour<bottle>({ brand: "prince", type: 23 });

/*---------BREAK-----------*/
function getSearchProduct<T>(products: T[]): T {
  // * do some database operations
  const myIndex = 3;
  return products[myIndex];
}

const getMoreSearchProduct = <T>(products: T[]): T => {
  return products[3];
};
