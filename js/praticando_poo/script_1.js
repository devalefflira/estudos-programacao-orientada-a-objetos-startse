/* Praticando os conceitos de:
    # Método Constructor
    # Declaração de Atributos
    # Instanciação de Objetos
*/

'use strict';

class Series {
  titulo;
  genero;
  temporada;
  episodios;
  ano;
  constructor(titulo, genero, temporada, episodios, ano) {
    this.titulo = titulo;
    this.genero = genero;
    this.temporada = temporada;
    this.episodios = episodios;
    this.ano = ano;
  }
}

let novaSerie = new Series('Stranger Things', 'Ficção Científica', 4, 40, 2016);

console.log(novaSerie);
