// Classes no TS também funcionam como type.

export class Empresa {
  //   public readonly nome: string = 'Luiz';  Posso inicializar o atributo já dando um valor para ele, além do tipo
  //   public readonly nome = 'Luiz';  Se eu quiser já dar o valor, não será necessario tipar (o ts já reconhece)
  public readonly nome: string; // Se eu não dissesse PUBLIC, o TS já entende que ele é publico
  private readonly colaboradores: Colaborador[] = []; // Só aceitará nesse array objetos criados por está classe. Repare que eu inicializei direto aqui
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    // inicializei os atributos declarando os valores pelo construtor
    this.nome = nome;
    this.cnpj = cnpj;
  }

  //   public adcionaColaborador(colaborador: Colaborador) { EU NÃO PRECISO DO PUBLIC POIS QUERO O METODO PUBLICO
  adcionaColaborador(colaborador: Colaborador) {
    this.colaboradores.push(colaborador);
  }

  mostraColaboradores() {
    for (const col of this.colaboradores) console.log(col);
  }
}

export class Colaborador {
  // repare que eu construí essa classe de forma mais CLEAN
  // declarei os atributos e tipei eles direto no consbtructor
  //   Se eu for fazer este atalho, eu sou obrigado a dizer o PUBLIC
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Udemy', '11.111.111/0001-11');
// console.log(empresa1);
// console.log(empresa1.nome);
const colaborador1 = new Colaborador('Luiz', 'Otavio');
const colaborador2 = new Colaborador('Lucia', 'Aroudo');
const colaborador3 = new Colaborador('Marco', 'Antonio');

empresa1.adcionaColaborador(colaborador1);
empresa1.adcionaColaborador(colaborador2);
empresa1.mostraColaboradores();
