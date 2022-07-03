'user strict';

class Produto {
  codigo;
  nome;
  constructor(codigo, nome) {
    this.codigo = codigo;
    this.nome = nome;
  }
}

class Disciplina {
  codigo;
  nome;
  constructor(codigo, nome) {
    this.codigo = codigo;
    this.nome = nome;
  }
}

const disciplina1 = new Disciplina(1, 'Matematica');
console.log(disciplina1);

const produto1 = new Produto(1, 'XYZ');
console.log(produto1);

const disciplina2 = new Disciplina(2, 'Português');
console.log(disciplina2);
