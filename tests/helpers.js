/*
  Set of method to stub the standard output.
*/

let output = '';
let write = process.stdout.write;

const captureOutput = () => {
  output = '';
  process.stdout.write = string => {
    if (!string) return;
    output += string;
  };
};

const getOutput = () => {
  return output;
};

const restoreOutput = () => {
  process.stdout.write = write;
};

module.exports = {
  captureOutput,
  getOutput,
  restoreOutput
};
