// void só é usado quando não se quer retornar nada.
function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

export const pessoa = {
  nome: 'Bruno',
  sobrenome: 'Aparecido',
  exibirNomeCompleto(): void {
    console.log(`${this.nome} ${this.sobrenome}`);
  },
};

semRetorno('Hello', 'World');
pessoa.exibirNomeCompleto();
