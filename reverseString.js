export default function reverseString(string) {
  let reversed = [...string];
  const length = reversed.length;
  for (let i = 0; i < length / 2; i++) {
    [reversed[i], reversed[length - 1 - i]] = [
      reversed[length - 1 - i],
      reversed[i],
    ];
  }

  return reversed.join("");
}
