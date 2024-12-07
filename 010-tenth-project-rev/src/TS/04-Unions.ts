let score: number | string = "hi";

score = 123;
console.log(score);

/*---------BREAK-----------*/

type User1 = {
  name: string;
  _id: number;
};

type Admin1 = {
  username: string;
  _id: number;
};

let sandy: User1 | Admin1 = { name: "Deep Ry", _id: 123 };

sandy = { username: "Sandip Ry", _id: 555 };
console.log(sandy);

/*---------BREAK-----------*/

function getDbId(id: number | string): number | string {
  if (typeof id === "string") {
    id.toLowerCase();
  } else {
    id += 2;
  }
  return id;
}

/*---------BREAK-----------*/

const data3: string[] | number[] = [123, 235]; // * whatever value u assign first takes as type
data3.push(1555);
console.log(data3);

const data4: (string | number)[] = [];

data4.push("sandy");
data4.push(123456);
console.log(data4);

/*---------BREAK-----------*/

let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "middle";
console.log(seatAllotment);
