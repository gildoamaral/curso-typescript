export class Carro {
  private readonly motor: Motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }
  acelerar(): void {
    this.motor.acelerar();
  }
  parar(): void {
    this.motor.parar();
  }
  desligar(): void {
    this.motor.desligar();
  }
}

class Motor {
  ligar() {
    console.log('Motor Ligou!');
  }
  acelerar() {
    console.log('MOTOR ACELEROU...');
  }
  parar() {
    console.log('motor parou');
  }

  desligar() {
    console.log('motor desligouuuuu');
  }
}

const carro = new Carro();
carro.ligar();
