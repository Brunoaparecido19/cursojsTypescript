type VotationOption = {
  numberOfVotes: number;
  option: string;
};

export class Votation {
  private _votationOptions: VotationOption[] = [];
  constructor(public details: string) {}

  addVotationOption(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption);
  }

  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfVotes += 1;
  }
  get votationOptions(): VotationOption[] {
    return this._votationOptions;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVoatations(): void {
    for (const votation of this.votations) {
      console.log(votation.details);
      for (const votationOption of votation.votationOptions) {
        console.log(votationOption.option, votationOption.numberOfVotes);
      }
      console.log('####');
      console.log('');
    }
  }
}

const votationGrup1 = new Votation(
  'Qual sua linguagem de programação favorita?',
);
votationGrup1.addVotationOption({ option: 'Python', numberOfVotes: 0 });
votationGrup1.addVotationOption({ option: 'TypeScript', numberOfVotes: 0 });
votationGrup1.addVotationOption({ option: 'JavaScript', numberOfVotes: 0 });

const votationGrup2 = new Votation('Qual sua cor favorita?');
votationGrup2.addVotationOption({ option: 'Vermelho', numberOfVotes: 0 });
votationGrup2.addVotationOption({ option: 'Verde', numberOfVotes: 0 });
votationGrup2.addVotationOption({ option: 'Azul', numberOfVotes: 0 });

export function voteRandom(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

for (let i = 0; i < 1000; i++) {
  const result = voteRandom(0, 3);
  if (result === 0) votationGrup1.vote(0);
  if (result === 1) votationGrup1.vote(1);
  if (result === 2) votationGrup1.vote(2);
}
for (let i = 0; i < 1000; i++) {
  const result = voteRandom(0, 3);
  if (result === 0) votationGrup2.vote(0);
  if (result === 1) votationGrup2.vote(1);
  if (result === 2) votationGrup2.vote(2);
}

const votationApp = new VotationApp();
votationApp.addVotation(votationGrup1);
votationApp.addVotation(votationGrup2);
votationApp.showVoatations();
