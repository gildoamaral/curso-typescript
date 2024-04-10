export class Pessoa {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
    private readonly idade: number,
    protected readonly cpf: string,
  ) {}

  getIdade() {
    return this.idade;
  }
  getCpf() {
    return this.cpf;
  }
  getNomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string, // Tirei public pois não estou criando novos atributos
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string, // tive que colocar public pois estou criando novo atributo
  ) {
    super(nome, sobrenome, idade, cpf);
  }

  getNomeCompleto() {
    console.log('fazendo algo antes');
    const result = super.getNomeCompleto();
    return result + ' HEEEY';
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto() {
    return `Isso é um cliente: ${this.nome} ${this.sobrenome}`;
  }
}

const aluno = new Aluno('Luiz', 'Miranda', 30, '000.000.000-00', 'A003');
const cliente = new Cliente('Luiz', 'Miranda', 30, '000.000.000-00');
const pessoa = new Pessoa('Luiz', 'Miranda', 30, '000.000.000-00');

console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(pessoa.getNomeCompleto());
