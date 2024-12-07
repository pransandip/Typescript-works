/**
 * * Type: It is a Easy way to refer to the different
 * * properties + functions that a "value" has. In
 * * addition you can say, anything that
 * * Is assign to variable has a type.
 */

const today = new Date();
console.log(today.getMonth());

/*---------BREAK-----------*/

const persons = [
  {
    age: 25,
  },
  {
    age: 28,
  },
];
console.log(persons[0].age);

/*---------Class-----------*/

class Color {}
const red = new Color();
