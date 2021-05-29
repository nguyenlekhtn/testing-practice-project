import calculator from "./calculator";

test("multiply normal", () => {
  expect(calculator.multiply(5, 2)).toBe(10);
});

test("multiply by zero", () => {
  expect(calculator.multiply(5, 0)).toBe(0);
});

test("divded by zero", () => {
  expect(() => calculator.divide(5, 0)).toThrow();
});

test("divded normal", () => {
  expect(calculator.divide(5, 2)).toBe(2.5);
});
