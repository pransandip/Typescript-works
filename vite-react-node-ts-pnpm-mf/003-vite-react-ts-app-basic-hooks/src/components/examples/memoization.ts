// classic example
import _ from "lodash";

function swatch(color: "red" | "blue") {
  console.log(`Swatch: ${color}`);
  return `Swatch: ${color}`;
}

const memoedSwatch = _.memoize(swatch);

memoedSwatch("red");
memoedSwatch("blue");
memoedSwatch("red");
memoedSwatch("blue");

// react memo example
const createSwatch = () => {
  const prev: { color: string | null; result: string | null } = {
    color: null,
    result: null,
  };

  return (color: "red" | "blue") => {
    if (color === prev.color) {
      return prev.result;
    }
    prev.color = color;
    prev.result = swatch(color);
    console.log(prev);
    return prev.result;
  };
};

const swatch1 = createSwatch();
const swatch2 = createSwatch();

// each func call is separate instance
console.log(swatch1("red"));
console.log(swatch2("red"));
console.log(swatch2("blue"));
