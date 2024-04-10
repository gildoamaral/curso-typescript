export class CarrinhoDeCompras {
  private readonly _produtos: Produto[] = [];

  inserirProduto(...newProduto: Produto[]): void {
    for (const produto of newProduto) {
      this.produtos.push(produto);
    }
  }

  get produtos() {
    return this._produtos;
  }

  quantidade(): number {
    return this.produtos.length;
  }

  total(): number {
    // let total = 0;
    // for (const produto of this.produtos) {
    //   total += produto.preco;
    // }
    const total = this.produtos.reduce((prevValue, currValue) => prevValue + currValue.preco, 0);
    return total;
  }
}

export class Produto {
  private nome: string;
  preco: number;

  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
  }
}

const c1 = new CarrinhoDeCompras();

const p1 = new Produto('Chocolate', 23);
const p2 = new Produto('Arroz', 7);

c1.inserirProduto(p1, p2);
console.log(c1.produtos);
