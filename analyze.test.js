import analyze from "./analyze";

test("average", () => {
  const obj = analyze([1, 8, 3, 4, 2, 6]);
  const result = {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  };
  expect(obj).toEqual(result);
});
