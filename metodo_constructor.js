//Programação Orientada a Objetos
// Método Constructor

'use strict';

class Filme {
  constructor(titulo, ano) {
    this.titulo = titulo;
    this.ano = ano;
  }
}

let meuFilme = new Filme('Aprendendo JavaScript', 2022);

console.log(meuFilme);
