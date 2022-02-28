type ObterChaveFn = <O, K extends keyof O>(obj: O, chave: K) => O[K];

const obterChave: ObterChaveFn = (obj, chave) => obj[chave];

const animal = {
  cor: 'Preto',
  vacinas: ['vacina 1', 'vacina 2'],
  idade: 10,
};
const vacinas = obterChave(animal, 'vacinas');
console.log(vacinas);
