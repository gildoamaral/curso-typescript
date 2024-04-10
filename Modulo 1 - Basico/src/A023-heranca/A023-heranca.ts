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
    return `Isso é uma pessoa: ${this.nome} ${this.sobrenome}`;
  }
}

export class Aluno extends Pessoa {
  getNomeCompleto() {
    return `Isso é um aluno: ${this.nome} ${this.sobrenome}`;
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto() {
    return `Isso é um cliente: ${this.nome} ${this.sobrenome}`;
  }
}

const aluno = new Aluno('Luiz', 'Miranda', 30, '000.000.000-00');
const cliente = new Cliente('Luiz', 'Miranda', 30, '000.000.000-00');
const pessoa = new Pessoa('Luiz', 'Miranda', 30, '000.000.000-00');

console.log(aluno.getNomeCompleto(), cliente.getNomeCompleto(), pessoa.getNomeCompleto());
