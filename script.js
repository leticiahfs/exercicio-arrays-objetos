
//exercicio1
let numeros1 = [10, 20, 30, 40, 50];
console.log("Exercício 1:");
for (let i = 0; i < numeros1.length; i++) {
  console.log(numeros1[i]);
}
numeros1.forEach(function(numero) {
  console.log(numero);
});
console.log("--------------");

//exercicio2
let frutas = ["uva", "banana", "manga"];
frutas.push("laranja"); 
frutas.shift();
console.log("Exercício 2:", frutas);
console.log("--------------");

//exercicio3
let numeros2 = [1,2,3,4,5,6,7,8,9,10];
let pares = numeros2.filter(function(num) {
  return num % 2 === 0;
});
console.log("Exercício 3:", pares);
console.log("-----------");

//exercicio4
let valores = [15, 8, 23, 42, 4, 16];
let maior = Math.max(...valores);
console.log("Exercício 4: Maior valor =", maior);
console.log("---------------------");

//exercicio5
let numeros3 = [5, 10, 15, 20];
function somaArray(arr) {
  let soma = 0;
  for (let i = 0; i < arr.length; i++) {
    soma += arr[i];
  }
  return soma;
}
console.log("Exercício 5: Soma =", somaArray(numeros3));
console.log("----------");

//exercicio6
let pessoa = {
  nome: "Ana Celta",
  idade: 98,
  profissao: "Dirigir um celta"
};
console.log("Exercício 6:", pessoa.nome, pessoa.idade, pessoa.profissao);
console.log("-----------");

//exercicio7
let carro = { marca: "Toyota", modelo: "Corolla", ano: 2020 };
carro.ano = 2025;
console.log("Exercício 7:", carro);
console.log("---------------");

//exercicio8
let livro = { titulo: "Dom Casmurro", autor: "Machado de Assis" };
livro.anoDePublicacao = 1899;
console.log("Exercício 8:", livro);
console.log("-------------");

//exercicio9
let produto = { nome: "Notebook", preco: 3500, quantidade: 2 };
console.log("Exercício 9:");
for (let propriedade in produto) {
  console.log(propriedade + ": " + produto[propriedade]);
}
console.log("-----------");

//exercicio110
let estudante = { nome: "Ana Clara", idade: 21, curso: "Garota de Programa" };
function exibirEstudante(estud) {
  console.log(`O estudante ${estud.nome} tem ${estud.idade} anos e está cursando ${estud.curso}.`);
}
console.log("Exercício 10:");
exibirEstudante(estudante);
console.log("-----------------");

//exercicio11
let livros = [
  { titulo: "1984", autor: "George Orwell", anoDePublicacao: 1949 },
  { titulo: "O Hobbit", autor: "J.R.R. Tolkien", anoDePublicacao: 1937 },
  { titulo: "A Culpa é das Estrelas", autor: "John Green", anoDePublicacao: 2012 }
];
console.log("Exercício 11:");
livros.forEach(function(livro) {
  console.log(livro.titulo);
});
console.log("-----------");

//exercicio12
let carros = [
  { marca: "Ford", modelo: "Fiesta", ano: 2020 },
  { marca: "Chevrolet", modelo: "Onix", ano: 2020 },
  { marca: "Honda", modelo: "Civic", ano: 2020 }
];
carros.forEach(function(carro) {
  carro.ano = 2025;
});
console.log("Exercício 12:", carros);
console.log("------------");

//exercicio13
let pessoas = [
  { nome: "Ana Celta Preto", idade: 77, cidade: "São Paulo" },
  { nome: "Carlinhos Maia", idade: 14, cidade: "Rio de Janeiro" },
  { nome: "Melissa Pamonhinha", idade: 18, cidade: "Belo Horizonte" }
];
let pessoaMaior30 = pessoas.find(function(pessoa) {
  return pessoa.idade > 30;
});
console.log("Exercício 13: Pessoa com mais de 30 anos =", pessoaMaior30.nome);
console.log("---------");
