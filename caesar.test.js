import caesar from "./caesar";

test("shift1", () => {
  const string = "defend the east wall of the castle";
  expect(caesar(string, 1)).toMatch(/efgfoe uif fbtu xbmm pg uif dbtumf/);
});

test("punctuation", () => {
  const string = "attack at dawn.";
  expect(caesar(string, 6)).toMatch(/gzzgiq gz jgct./);
});

test("large shift", () => {
  const string = "attack at dawn.";
  expect(caesar(string, 25)).toMatch(/zsszbj zs czvm/);
});
