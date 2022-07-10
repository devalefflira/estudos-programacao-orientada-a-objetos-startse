import { CupomDesconto } from './cupom_desconto.js';

('use strict');

class Cliente {
  #nome;
  #gastosAcumulados = 0;
  #cupom;
  constructor(nome) {
    this.#nome = nome;
    this.#cupom = new CupomDesconto();
  }
  getBeneficios() {
    this.#cupom.getDesconto(this.#gastosAcumulados);
  }
  setGasto(valor) {
    this.#gastosAcumulados += valor;
  }
}

const c1 = new Cliente('Ana');
c1.setGasto(500);
c1.getBeneficios();
c1.setGasto(500);
c1.getBeneficios();
