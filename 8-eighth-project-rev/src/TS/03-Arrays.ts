// When we don't have elements inside array
// we have to annotate like below
const newCars: string[] = [];

const carMakers = ["toyota", "ford", "chevy"];
const dates = [new Date(), new Date()];

//2d array
const carsByMake = [["f150"], ["corolla"], ["camaro"]];

// Help with inference when extracting values
// Typescript knows 'car1' value is string
const car1 = carMakers[0];

// Help with map
const temp: string[] = carMakers.map((car: string): string => {
  return car.toLocaleUpperCase();
});
console.log(temp);

// Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push(new Date());
importantDates.push("2023-1-29");
console.log(importantDates);
