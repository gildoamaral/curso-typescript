export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected _cpf: string,
    // por convenção, eu coloco _ quando for o atributo settado ou gettado
  ) {}

  /* Maneira antiga como faziamos getter e setter. Algumas linguagens ainda usam dessa forma (JAVA) */
  //   setCpf(valor: string): void {
  //     this.cpf = valor;
  //   }
  //   // O objetivo de fazer um getter pode ser entregar valores limpos ao que requisitar
  //   getCpf() {
  //     return this.cpf.replace(/\D/g, ''); // regEx que limpa tudo que não for numero
  //   }

  set cpf(valor: string) {
    console.log('SETTER CHAMADO');
    this._cpf = valor;
  }

  get cpf() {
    console.log('GETTER CHAMADO');

    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Luiz', 'Miranda', 30, '000.000.000-00');
// pessoa.setCpf('123.456.789-00');
// console.log(pessoa.getCpf());
pessoa.cpf = '123.456.789-00'; //quando faço dessa forma, ele já reconhece o metodo SET
console.log(pessoa.cpf);
