import reverseString from "./reverseString";

test("single word", () => {
  expect(reverseString("I am popa")).toMatch(/apop ma I/);
});
