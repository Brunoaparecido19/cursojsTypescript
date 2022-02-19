export class Person {
  static defaultAge = 0;
  static defaultCpf = '000.000.000-00';
  constructor(
    public name: string,
    public lastName: string,
    public age: number,
    public cpf: string,
  ) {}
  defaultMethod(): void {
    console.log(Person.defaultAge, Person.defaultCpf);
  }
  static personCreate(name: string, lastName: string): Person {
    return new Person(name, lastName, Person.defaultAge, Person.defaultCpf);
  }
}
const person1 = new Person('Bruno', 'Aparecido', 21, '016.021.036-40');
const person2 = Person.personCreate('Maria', 'Aparecida');
console.log(person1, '\n', person2);
person1.defaultMethod();
