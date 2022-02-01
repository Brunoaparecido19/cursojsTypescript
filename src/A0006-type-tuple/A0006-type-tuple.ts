//o tipo tuple é um tipo que pode ser criado como uma lista de tipos diferentes
// também posso adicionar o readonly para deixar o tipo imutavel ou seja nao poderia mudar o valor
const clientsData1: readonly [number, string] = [1, 'Bruno'];
const clientsData2: [number, string, string] = [1, 'Bruno', 'Aparecido'];
//com o operado ? pode-se definir um tipo opcional
const clientsData3: [number, string, string?] = [1, 'Bruno'];
// com o ...[] pode-se definir um array de tipos
const clientsData4: [number, string, ...string[]] = [
  1,
  'Bruno',
  'Aparecido',
  'Bruno',
  'Aparecido',
];
// com o uso do readonly pode-se definir um array imutavel
// clientsData1[0] = 2; retorna error
// clientsData1[1] = 'João'; retorna error

console.log(clientsData1);
console.log(clientsData2);
console.log(clientsData3);
console.log(clientsData4);
