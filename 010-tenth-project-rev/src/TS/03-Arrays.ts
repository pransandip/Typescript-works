const number: Array<number> = [];
number.push(123);
console.log(number);

// * break
type UserType = {
  name: string;
  isActive: boolean;
};

const allUser: UserType[] = [];

allUser.push({ name: "sandy ry", isActive: true });
allUser.push({ name: "sandy roy", isActive: false });

console.log(allUser);

// * break
const MLModels: number[][] = [[255, 255, 255]];

console.log(MLModels.push([123, 123, 256]));
console.log(MLModels);
