// Considerando que a classe Personagem só foi criada para ser extendida para subclasses, ela não precisará jamais ser instanciada
// Sendo assim, ela é uma classe ABSTRATA.

export abstract class Personagem {
  protected abstract emoji: string;
  //   atributo abstrato também obriga as subclasses à adotarem

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(this.nome + ' agora tem ' + this.vida + ' de vida.');
  }
  // o metodo abstrato obriga as subclasses à implementar este metodo.
  abstract bordao(): void;
}

export class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD}';
  bordao(): void {
    console.log(this.emoji + ' GUERREIRA AO ATAQUEEEEE');
  }
}
export class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';
  bordao(): void {
    console.log(this.emoji + ' MOSTROOOOOOOOOOO');
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 87, 1000);

guerreira.atacar(monstro);
monstro.atacar(guerreira);
