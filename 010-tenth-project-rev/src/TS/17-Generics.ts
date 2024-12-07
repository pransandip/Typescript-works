// const getSearchProduct = <T>(products: T[]): T[] => {
//   const res = products.map((item): number => item * 2);
//   return res;
// };

/*---------BREAK-----------*/

// * T must extend {} which means pretty much anything except null and undefined.
// * T can be a primitive though

const getProduct = <T extends {}>(products: T[]): T[] => {
  return products;
};

const temp0 = getProduct(["ann", 5, "8"]);
console.log(temp0);

/*---------BREAK-----------*/

// * T must extend number which means it's only expect number.
// * In this case generics won't work properly

const getSearchProduct2 = <T extends number>(products: T[]): T[] | number[] => {
  const res = products.map((item) => item * 2);
  return res;
};

const temp1 = getSearchProduct2([3, 5, 8]);
console.log(temp1);

/*---------BREAK-----------*/

const getMoreSearchProduct2 = <Type>(products: Array<Type>): Array<Type> => {
  return products;
};

const temp2 = getMoreSearchProduct2([3, 5, 8]);
console.log(temp2);

/*---------BREAK-----------*/

interface Bottle {
  brand: string;
  type: number;
}

function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

let myNumArr = getArray([100, 200, 300]);
let myStrArr = getArray(["Hello", "World"]);

console.log(myNumArr);
console.log(myStrArr);
