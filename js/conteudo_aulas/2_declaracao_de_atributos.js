'use strict';

class Financiamento {
  valorFinanciamento;
  taxaJuros;
  numeroDeParcelas;
  numeroDoFinanciamento;
  constructor(
    valorFinanciamento,
    taxaJuros,
    numeroDeParcelas,
    numeroDoFinanciamento
  ) {
    this.valorFinanciamento = valorFinanciamento;
    this.taxaJuros = taxaJuros;
    this.numeroDeParcelas = numeroDeParcelas;
    this.numeroDoFinanciamento = numeroDoFinanciamento;
  }
}

const fin = new Financiamento(1000, 1, 60, 20220702001);

console.log(fin);
