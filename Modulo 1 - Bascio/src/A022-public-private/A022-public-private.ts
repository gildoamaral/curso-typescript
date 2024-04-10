export class Empresa {
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

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

export class Colaborador {
  constructor(
    // se eu
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Udemy', '11.111.111/0001-11');

const colaborador1 = new Colaborador('Luiz', 'Otavio');
const colaborador2 = new Colaborador('Lucia', 'Aroudo');
const colaborador3 = new Colaborador('Marco', 'Antonio');

empresa1.adcionaColaborador(colaborador1);
empresa1.adcionaColaborador(colaborador2);
empresa1.adcionaColaborador(colaborador3);
empresa1.mostraColaboradores();
