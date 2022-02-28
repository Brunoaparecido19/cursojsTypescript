interface PessoaProtocolo1<T, U> {
  nome: T;
  sobrenome: T;
  idade: U;
}
interface PessoaProtocolo2<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno1: PessoaProtocolo1<string, number> = {
  nome: 'Bruno',
  sobrenome: 'Aparecido',
  idade: 21,
};
const aluno2: PessoaProtocolo2 = {
  nome: 'Bruno',
  sobrenome: 'Aparecido',
  idade: 21,
};

console.log(aluno1, aluno2);
