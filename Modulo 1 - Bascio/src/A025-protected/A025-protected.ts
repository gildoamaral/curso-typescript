// Enquanto o private permite o acesso de uma atributo APENAS DENTRO DA CLASSE EM QUE ELE FOI CRIADO, o PROTECTED permite acesso apenas DENTRO DA CLASSE E DAS SUBCLASSES, mas ainda não fora

export class Empresa {
  public readonly nome: string;
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adcionaColaborador(colaborador: Colaborador) {
    this.colaboradores.push(colaborador);
  }

  mostraColaboradores() {
    for (const col of this.colaboradores) console.log(col);
  }
}

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '11.111.111/0001-11');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Udemy();

const colaborador1 = new Colaborador('Luiz', 'Otavio');
const colaborador2 = new Colaborador('Lucia', 'Aroudo');
const colaborador3 = new Colaborador('Marco', 'Antonio');

empresa1.adcionaColaborador(colaborador1);
empresa1.adcionaColaborador(colaborador2);
empresa1.adcionaColaborador(colaborador3);
const colaboradorRemovido = empresa1.popColaborador();
// empresa1.mostraColaboradores();
console.log('o colaborador removido é: ', colaboradorRemovido);
