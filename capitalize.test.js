import capitalize from "./capitalize";

test("single Word", () => {
  expect(capitalize("home")).toMatch(/H/);
});

test("sentence", () => {
  expect(capitalize("my home.")).toMatch(/My home./);
});
