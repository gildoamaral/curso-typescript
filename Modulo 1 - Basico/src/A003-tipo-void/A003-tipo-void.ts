function semRetorno(...args: string[]): void {
  // Repare que quando coloco ...args ele já me dá um array. a inferencia de tipo eu coloquei porque quis.
  console.log(args.join('  '));
}

export const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otavio',

  exibirNome(): void {
    //Posso declarar o void (não retorna nada); Mas ele também será inferido;
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Luiz', 'Otavio');
