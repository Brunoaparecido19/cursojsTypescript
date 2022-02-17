// formas de criar classes
export class Company {
  public readonly name: string;
  protected readonly contributors: Contributor[] = [];
  private readonly cnpj: string;

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
export class Facebook extends Company {
  constructor() {
    super('Facebook', '11.111.111/0001-11');
  }
  popContributor(): Contributor | null {
    const contributor = this.contributors.pop();
    if (contributor) return contributor;
    return null;
  }
}
export class Contributor {
  constructor(
    public readonly name: string,
    public readonly sobrenome: string,
  ) {}
}
const company1 = new Facebook();
const contributor1 = new Contributor('Bruno', 'Aparecido');
const contributor2 = new Contributor('Maria', 'Silva');
const contributor3 = new Contributor('Pedro', 'Mota');
company1.addcontributor(contributor1);
company1.addcontributor(contributor2);
company1.addcontributor(contributor3);
company1.popContributor();
company1.popContributor();
console.log(company1);
company1.showContributors();
