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
