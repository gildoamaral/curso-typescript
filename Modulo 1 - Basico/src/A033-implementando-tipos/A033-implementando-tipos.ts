type TipoNome = {
  nome: string;
};

type TipoSobrenome = {
  sobrenome: string;
};

type TipoNomeCompleto = {
  nomeCompleto: () => string;
};

// Ao implementar tipos, eu digo a minha class que tipo de coisas que ela deverá obedecer

export class Pessoa implements TipoNome, TipoSobrenome, TipoNomeCompleto {
  //repare que posso implementar varios tipos ao mesmo tempo
  constructor(
    public nome: string,
    // private sobrenome: string,    Usando a implementação, é impossivel eu definir algum atributo como private ou protected
    public sobrenome: string,
  ) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
  //   Tanto os atributos nome, sobrenome, quanto o metodo nomeCompleto são obrigatórios, uma vez que foi passado pelo tipo

  falaOi() {
    console.log('ola');
  } // o tipo não impede que eu coloque atributos adicionais
}
