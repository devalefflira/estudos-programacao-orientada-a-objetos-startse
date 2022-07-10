'user strict';

// Loja - possui produtos
class Loja {
  #nome;
  #produtos = [];
  constructor(nome) {
    this.#nome = nome;
  }
  adicionaProduto(produto) {
    this.#produtos.push(produto);
  }
  exibeProdutos() {
    console.log(`Lista de Produtos da Loja ${this.#nome}`);
    for (const produto of this.#produtos) {
      console.log(produto.getDados());
    }
  }
}

// Produto - compõe a loja
class Produto {
  #tipo;
  #valor;
  constructor(tipo, valor) {
    this.#validaValor(valor);
    this.#tipo = tipo;
    this.#valor = valor;
  }
  #validaValor(valor) {
    if (typeof valor !== 'number') {
      console.log('Valor inválido!');
    }
  }
  getDados() {
    return `
    Tipo: ${this.#tipo} R$ ${this.#valor}`;
  }
  setValor(valor) {
    this.#valor = valor;
  }
}

// Livro - é uma subclasse de Produto / É um tipo de produto
class Livro extends Produto {
  #titulo;
  #numPag;
  constructor(titulo, numPag, valor) {
    super('Livro', valor);
    this.#titulo = titulo;
    this.#numPag = numPag;
  }
  getDados() {
    return `
    ${super.getDados()}
    Titulo: ${this.#titulo}
    Numero de Paginas: ${this.#numPag}`;
  }
}

// Composição

const prod = new Produto('Generico');
const liv = new Livro('Livro', 'POO', 50);
const liv2 = new Livro('Livro', 'JavaScript', 120);

const minhaLoja = new Loja('Minha Loja');
minhaLoja.adicionaProduto(prod);
minhaLoja.adicionaProduto(liv);
minhaLoja.adicionaProduto(liv2);
minhaLoja.exibeProdutos();
