// Como visto, type e interface funcionam da mesma forma; Com algumas pequenas diferenças. veja:
// Pela tendencia, type existe mais na programação funcional e interface funciona mais na OOP

interface TipoNome {
  // o formato é diferente
  nome: string;
}
interface TipoSobrenome {
  sobrenome: string;
}
interface TipoNomeCompleto {
  nomeCompleto(): string;
}
type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto; // não posso fazer união de interfaces
interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {} // posso extender uma interface

export class Pessoa implements TipoPessoa2 {
  constructor(
    public nome: string,

    public sobrenome: string,
  ) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }

  falaOi() {
    console.log('ola');
  }
}
