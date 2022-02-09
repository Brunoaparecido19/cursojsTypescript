let x: unknown;
x = 100;
x = 'texto';
x = true;
x = [];
x = {};
x = null;
x = undefined;
x = 1000;
const y = 20;

// o unknown ele garante que você cheque o tipo de valor que está sendo passado para ele

if (typeof x === 'number') {
  console.log(x + y);
}
