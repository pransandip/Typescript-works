interface Database {
  connection: string;
  username: string;
  password?: string;
}

const connection = <T, U extends Database>(
  valueOne: T,
  valueTwo: U
): object => {
  return {
    valueOne,
    valueTwo,
  };
};

const conURL = connection("sandy", {
  connection: "url",
  username: "sandy001",
});

console.log(conURL);
