// Praticando Herança, Superclasse e Subclasse.

'use strict';

class Veiculo {
  tipo;
  constructor(tipo) {
    this.tipo = tipo;
  }
  getDados() {
    return `Tipo: ${this.tipo}`;
  }
}

class Carro extends Veiculo {
  montadora;
  modelo;
  versao;
  ano;
  combustivel;
  constructor(tipo, montadora, modelo, versao, ano, combustivel) {
    super(tipo);
    this.montadora = montadora;
    this.modelo = modelo;
    this.versao = versao;
    this.ano = ano;
    this.combustivel = combustivel;
  }
}

const novoCarro = new Carro(
  'SUV',
  'Toyota',
  'Hilux',
  'SW4',
  'Deluxe',
  2022,
  'Diesel'
);

console.log(novoCarro);
