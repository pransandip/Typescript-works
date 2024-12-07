interface Database {
  connection: string;
  username: string;
  password?: string;
}

function createObject<T, U, K extends Database>(
  valOne: T,
  valTwo: U,
  valThree: K
): object {
  return {
    valOne,
    valTwo,
    valThree,
  };
}

const temp = createObject(700040, "sandy", {
  connection: "cjhdcjd",
  username: "sandy001",
});
