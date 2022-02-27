function add(a: unknown, b: unknown): string | number {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}
console.log(add('a', 'b'));
console.log(add(8, 7));

export type Pessoa = { tipo: 'pessoa'; nome: string };
export type Animal = { tipo: 'animal'; cor: string };
export type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  tipo: 'pessoa' = 'pessoa';
  constructor(public nome: string) {}
}

function showName(obj: PessoaOuAnimal) {
  // if ('nome' in obj) console.log(obj.nome);
  // if (obj instanceof Aluno) console.log(obj.nome);
  switch (obj.tipo) {
    case 'pessoa':
      console.log(obj.nome);
      return;
    case 'animal':
      console.log('Isso é um animal', obj.cor);
      return;
  }
}

showName(new Aluno('João'));
showName({ tipo: 'animal', cor: 'Rosa' });
