const total = (numbers: Array<number>) => numbers.reduce((a, c) => a + c, 0);
console.log(total([1, 2, 3]));

const logger = <T>(arg: T): T => arg;
console.log(logger([1, 2, 3]));
