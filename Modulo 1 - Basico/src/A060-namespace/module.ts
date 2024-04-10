/*eslint-disable @typescript-eslint/no-namespace
 */

namespace MeuNamespace {
  const nome = 'Luiz';

  export class PessoaDoNamespace {
    constructor(public name: string) {}
  }

  const pessoaDoNamespace = new PessoaDoNamespace(nome);
  console.log(pessoaDoNamespace);
}

const pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Luiz');
console.log(pessoaDoNamespace);

