export class Company {
  public readonly name: string;
  private readonly contributors: Contributor[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }
  addcontributor(contributor: Contributor): void {
    this.contributors.push(contributor);
  }
  showContributors(): void {
    for (const contributor of this.contributors) {
      console.log(contributor);
    }
  }
}
export class Contributor {
  constructor(
    public readonly name: string,
    public readonly sobrenome: string,
  ) {}
}
const company1 = new Company('Facebook', '11.111.111/0001-11');
const contributor1 = new Contributor('Bruno', 'Aparecido');
const contributor2 = new Contributor('Maria', 'Silva');
const contributor3 = new Contributor('Pedro', 'Mota');
company1.addcontributor(contributor1);
company1.addcontributor(contributor2);
company1.addcontributor(contributor3);
console.log(company1);
company1.showContributors();
