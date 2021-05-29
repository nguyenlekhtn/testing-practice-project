export default function analyze(numArr) {
  const sum = numArr.reduce((prev, curr) => prev + curr, 0);
  const length = numArr.length;
  const average = Math.round(sum / length);
  const min = numArr.reduce((prev, curr) => (curr < prev ? curr : prev));
  const max = numArr.reduce((prev, curr) => (curr < prev ? prev : curr));

  return { average, length, min, max };
}
