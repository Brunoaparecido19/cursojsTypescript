export class Person {
  constructor(
    public readonly name: string,
    public readonly lastName: string,
    private readonly age: number,
    protected readonly cpf: string,
  ) {}
  getFullName(): string {
    return `${this.name} ${this.lastName}`;
  }
  getAge(): number {
    return this.age;
  }
  getCPF(): string {
    return this.cpf;
  }
}

export class Student extends Person {
  constructor(
    name: string,
    lastName: string,
    age: number,
    cpf: string,
    public classroom: string,
  ) {
    super(name, lastName, age, cpf);
    this.classroom = classroom;
  }
  gteFullName(): string {
    console.log('aaaaaa');
    const result = super.getFullName();
    return result + 'HEYYYYYY';
  }
}
export class Client extends Person {
  gteFullName(): string {
    return `Isso vem de Client: ${this.name} ${this.lastName}`;
  }
}

const student1 = new Student('Bruno', 'aparecido', 21, '016.021.036-40', 'A1');
const client1 = new Client('Bruno', 'aparecido', 21, '016.021.036-40');
console.log(student1.getFullName());
console.log(client1.getFullName());
console.log(student1);
