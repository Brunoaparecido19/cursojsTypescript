type TipoPessoa = {
  nome: string;
  sobrenome: string;
  nomeCompleto(): string;
};
export class Pessoa implements TipoPessoa {
  constructor(public nome: string, public sobrenome: string) {}

  public nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('Bruno', 'Aparecido');
console.log(pessoa.nomeCompleto());
