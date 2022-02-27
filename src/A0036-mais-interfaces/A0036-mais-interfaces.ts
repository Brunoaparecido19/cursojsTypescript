// Declaration merging em interfaces
interface Pessoa {
  nome: string;
}
interface Pessoa {
  readonly sobrenome: string;
}
interface Pessoa {
  readonly endereco: readonly string[];
}
interface Pessoa {
  readonly idade?: number;
}
const pessoa1: Pessoa = {
  nome: 'Bruno',
  sobrenome: 'Aparecido',
  endereco: ['Luiz galdino'],
};
console.log(pessoa1);
