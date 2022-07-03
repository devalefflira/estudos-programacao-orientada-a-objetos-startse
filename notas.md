Curso: Progamação Orientada a Objetos
Instituição: StartSe
Programa: Tech Academy
Turma: 1

Anotações

# User Strict

### Quando presente no código: Todas as variáveis precisam ser declaradas

# Método Construtor

## Estrutura:

*class nomeDaClasse {
  *constructor(parâmetro1, parâmetro2) {
    **this.objeto = parâmetro1;
    **this.onketo = parâmetro2;
  }
}


## Declara uma variável e atribui a ela a criação dentro da Classe Filme e chama dois argumentos. Ex.:

let meuFilme = *new Filme('Aprendendo JavaScript', 2022);

### *Palavra reservada
### ** Refere-se ao objeto que está dentro da classe

## Sem argumentos e sem parâmetros passados

- Os argummentos passados, quando não existirem parâmetros, serão ignorados.

- O uso reservado da palavra "this", além dela diferenciar os atributos dos parâmetros, no caso em questão, serve para declaração dos atributos das classes.

# Declaração de Atributos das Classes

### Podem ser declarados antes do método (não é obrigatório, mas é uma boa prática) constructor e posteriormente utilizados dentro da classe com a palavra this.