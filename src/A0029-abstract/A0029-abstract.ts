export abstract class Character {
  static life: number;
  constructor(
    protected name: string,
    public life: number,
    protected _attack: number,
  ) {}

  attack(character: Character): void {
    this.characterTalk();
    character.loseLife(this._attack);
  }
  loseLife(attackForce: number): void {
    this.life -= attackForce;
    console.log(`${this.name} está com ${this.life} de vida...`);
  }
  abstract characterTalk(): void;
}

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
export class Warrior extends Character {
  characterTalk(): void {
    console.log('JavaScript AOOOO ATAAAAQUE!!!');
  }
}
export class Monster extends Character {
  characterTalk(): void {
    console.log('PHP AOOOO ATAAAAQUEE!!');
  }
}

const warrior = new Warrior('JavaScipt', 1000, 100);
const monster = new Monster('PHP', 1000, 100);

for (let i = 0; i <= 20; i++) {
  if (getRandomInt(10, 1) >= 5) {
    warrior.attack(monster);
  } else {
    monster.attack(warrior);
  }
  if (warrior.life === 0) {
    console.log('O JavaScript Morreu');
    break;
  }
  if (monster.life === 0) {
    console.log('O PHP Morreu');
    break;
  }
}
