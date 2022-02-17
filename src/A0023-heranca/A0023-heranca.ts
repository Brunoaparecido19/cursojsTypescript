export class Person {
  constructor(
    public readonly name: string,
    public readonly lastName: string,
    private readonly age: number,
    protected readonly cpf: string,
  ) {}
  gteFullName(): string {
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
  gteFullName(): string {
    return `Isso vem de Student: ${this.name} ${this.lastName}`;
  }
}
export class Client extends Person {
  gteFullName(): string {
    return `Isso vem de Client: ${this.name} ${this.lastName}`;
  }
}

const student1 = new Student('Bruno', 'aparecido', 21, '016.021.036-40');
const client1 = new Client('Bruno', 'aparecido', 21, '016.021.036-40');
console.log(student1.gteFullName());
console.log(client1.gteFullName());
