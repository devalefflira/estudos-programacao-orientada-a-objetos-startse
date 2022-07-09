'use strict';

class Produto {
  tipo;
  constructor(tipo) {
    this.tipo = tipo;
  }
  getDados() {
    return `Tipo: ${this.tipo}`;
  }
}

class Livro extends Produto {
  titulo;
  numPag;
  constructor(tipo, titulo, numPag) {
    super(tipo);
    this.titulo = titulo;
    this.numPag = numPag;
    console.log(super.getDados('Físico'));
  }
}

const prod = new Produto('Prod...');
// console.log(prod.getDados());

const liv = new Livro('Produto', 'Meu Livro', 133);
// console.log(liv);
