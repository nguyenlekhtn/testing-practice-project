const calculator = (() => {
  const add = (a, b) => a + b;
  const substact = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => {
    if (b === 0) throw new Error("Can be divided by 0");
    return a / b;
  };

  return { add, substact, divide, multiply };
})();

export default calculator;
