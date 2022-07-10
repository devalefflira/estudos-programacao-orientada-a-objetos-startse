class Laboratorio {
  #nome;
  #capacidade;
  constructor(nome, capacidade) {
    this.#nome = nome;
    this.#capacidade = capacidade;
  }
  getNome(nome) {
    return this.#nome;
  }
  getCapacidade(capacidade) {
    return this.#capacidade;
  }
  setNome(nome) {
    this.#nome = nome;
  }
  setCapacidade(capacidade) {
    this.#capacidade = capacidade;
  }
}

const lab = new Laboratorio('Infromatica', 40);
let texto = `Laboratorio de ${lab.getNome()}. Capacidade: ${lab.getCapacidade()}`;
console.log(texto);

lab.setNome('Computação');
lab.setCapacidade(35);
texto = `Laboratorio de ${lab.getNome()}. Capacidade: ${lab.getCapacidade()}`;
console.log(texto);
