export class Carro {
  private readonly motor = new Motor();
  liga(): void {
    this.motor.liga();
  }

  desligar(): void {
    this.motor.desligar();
    this.para();
  }

  acelerar(velocidade: number | undefined): void {
    this.motor.acelerar();
    velocidade = 0;
    for (let i = 0; i < 260; velocidade++) {
      if (velocidade === 260) {
        break;
      }

      if (velocidade % 10 === 0) console.log(`O carro está a ${velocidade}Km`);
    }
    this.desligar();
  }

  para(): void {
    this.motor.para();
  }
}
export class Motor {
  liga(): void {
    console.log('Motor Ligado');
  }

  desligar(): void {
    console.log('O Motor Desligou');
  }

  acelerar(): void {
    console.log('Motor Está Acelerando...');
  }

  para(): void {
    console.log('O Carro Está parando');
  }
}
const carro = new Carro();
carro.acelerar(0);
