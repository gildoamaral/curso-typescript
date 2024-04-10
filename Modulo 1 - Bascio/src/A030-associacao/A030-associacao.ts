abstract class Ferramenta {
  constructor(public _nome: string) {}

  get nome(): string {
    return this._nome;
  }
  abstract escrever(): void;
}

class Caneta extends Ferramenta {
  escrever() {
    console.log(`${this.nome} está escrevendo`);
  }
}

class MaquinaEscrever extends Ferramenta {
  escrever() {
    console.log(`${this.nome} está digitando`);
  }
}

export class Escritor {
  private _ferramenta: Ferramenta | null = null;
  constructor(public _nome: string) {}

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  escrever(): void {
    if (this._ferramenta === null) {
      console.log('não posso escrever sem ferramenta');
      return;
    }
    this._ferramenta.escrever();
  }
}

const c1 = new Caneta('caneta');
const m1 = new MaquinaEscrever('maquina');
const e1 = new Escritor('Benoic');
e1.escrever();
e1.ferramenta = null;
e1.escrever();
