// * Readonly
const logs: readonly string[] = ["log1", "log2"];
console.log(logs);

// ? Break
type NewUser = {
  readonly _id: number;
  name: string;
  email: string;
  isActive: boolean;
  cardDetails?: number;
};

const myUser: NewUser = {
  _id: 123,
  name: "sandy",
  email: "s@s.com",
  isActive: true,
};

myUser.email = "sandy@m.com";
console.log(myUser);
