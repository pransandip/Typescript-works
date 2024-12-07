const user001: (string | number)[] = ["sr", 1];
console.log(user001);

let user002: [string, number, boolean];
user002 = ["sr", 28, true];

let rgb: [number, number, number] = [255, 255, 123];

/*---------BREAK-----------*/
type NewUsrType = [number, string];

const user003: NewUsrType = [28, "sr"];
user003.push("true"); // * Not restricting
console.log(user003);
