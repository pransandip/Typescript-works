const add = (a: number, b: number): number => {
  return a + b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const logger = (message: string): void => {
  console.log(message);
};

// never going to reach the end of function means, some
// point of time throw an error without returning anything
const throwError = (message: string): never => {
  throw new Error(message);
};

const throwError1 = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
};

/*------BREAK------*/

const todayWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todayWeather);
