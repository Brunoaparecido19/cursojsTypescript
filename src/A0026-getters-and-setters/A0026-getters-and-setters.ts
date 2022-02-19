export class Person {
  constructor(
    private name: string,
    private lastName: string,
    private age: number,
    private _cpf: string,
  ) {
    this.cpf = _cpf;
  }
  set cpf(cpf: string) {
    console.log('SETTER CHAMADO');
    this._cpf = cpf;
  }
  get cpf(): string {
    console.log('GETTER CHAMADO');
    return this._cpf.replace(/\D/g, '');
  }
}

const person1 = new Person('Bruno', 'Aparecido', 21, '016.021.036-40');
person1.cpf = '015.024.016-72';
console.log(person1.cpf);
