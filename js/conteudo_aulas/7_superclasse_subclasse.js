// Superclasse / Base / Pai ou Mãe
class Produto {
  tipo;
  constructor(tipo) {
    this.tipo = tipo;
  }
  getDados() {
    return `Tipo: ${this.tipo}`;
  }
}

// Subclasse / Extensão / Filho ou Filha
class Livro extends Produto {
  titulo;
  numPag;
  constructor(titulo, numPag) {
    super('Físico');
    this.titulo = titulo;
    this.numPag = numPag;
  }
}

const prod = new Produto('Produto Genérico');
console.log(prod.getDados());

const liv = new Livro('Meu Livro', 122);
console.log(liv.getDados());
