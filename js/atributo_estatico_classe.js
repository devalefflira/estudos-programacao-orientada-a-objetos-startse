class Musica {
  static formato = 'mp3';
  #titulo;
  #duracao;
  constructor(titulo, duracao) {
    this.#titulo = titulo;
    this.#duracao = duracao;
  }
}

const musica1 = new Musica('Minha musica', 190, Musica.formato);

console.log(musica1);
