// Metodos staticos não estarão disponíveis à instância, mas apenas a propria classe

export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa1 = new Pessoa('Luiz', 'Miranda', 30, '000.000.000-00');
const pessoa2 = Pessoa.criaPessoa('Maria', 'Mirabel');
// Pessoa.falaOi(); // repare que não precisei instanciar a class

console.log(pessoa1);
console.log(pessoa2);
