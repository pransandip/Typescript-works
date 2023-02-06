// ! TODO : query?
function shallRun(files: String[]) {
  return files.reduce((a, f) => {
    return a || f.endsWith(".ts");
  }, false);
}

// ! TODO : query?
function getMean(array: number[]) {
  return array.length === 0
    ? undefined
    : array.reduce((a, b) => a + b) / array.length;
}

// ! TODO : query?
function camelCase(flag: string) {
  return flag.split("-").reduce((str, word) => {
    return str + word[0].toUpperCase() + word.slice(1);
  });
}

// ! TODO : query?
function toSeconds(time: string) {
  // hhmmss => ss
  const parts = time.split(":").reverse();
  return parts
    .map((value, index) => parseInt(value) * Math.pow(60, index))
    .reduce((a, b) => a + b);
}

// ! TODO : query?
export function spliceURL(...args: string[]): string {
  return Array.from(args)
    .reduce((lastResult, current) => lastResult + current)
    .replace(/([^:])(\/)+(.)/g, `$1/$3`);
}
