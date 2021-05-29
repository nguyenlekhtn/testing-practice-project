export default function caesar(string, shift) {
  const stringArr = Array.from(string);

  const shiftedArr = stringArr.map((char) => {
    if (!char.match(/[a-zA-Z]/)) return char;
    const charCode = char.charCodeAt(0);
    const isLowerCase = char.match(/[a-z]/) ? true : false;
    const startingPoint = isLowerCase ? 97 : 65;
    const module = getModulo(charCode - startingPoint + shift, 26);
    const shiftedCharCode = module + startingPoint;

    return String.fromCharCode(shiftedCharCode);
  });
  return shiftedArr.join("");
}

function getModulo(a, n) {
  return ((a % n) + n) % n;
}
