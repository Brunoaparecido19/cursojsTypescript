let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 10);

export function createPerson(
  fristName: string,
  lastName?: string,
): {
  fristName: string;
  lastName?: string;
} {
  return {
    fristName,
    lastName,
  };
}
export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoNumber = squareOf(2);

if (squareOfTwoNumber === null) console.log('conta invalida');
else console.log(squareOfTwoNumber ** 2);
