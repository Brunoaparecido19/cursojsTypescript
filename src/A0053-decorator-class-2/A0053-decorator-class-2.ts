export function inverteString<T extends new (...agrs: any[]) => any>(
  target: T,
): T {
  console.log('Sou o decorador e recebi', target);
  return class extends target {
    cor: string;

    constructor(...args: any[]) {
      super();
      this.especie = this.inverte(args[0]);
      this.nomeAnimal = this.inverte(args[1]);
      this.cor = this.inverte(args[2]);
    }
    inverte(valor: string): string {
      return valor.split('').reverse().join('');
    }
  };
}

@inverteString
export class Animal {
  constructor(
    public especie: string,
    public nomeAnimal: string,
    public cor: string,
  ) {
    console.log('Sou a classe');
  }
}

const animal = new Animal('Tityus fasciolatus', 'Escorpião', 'Marron');
console.log(animal);
