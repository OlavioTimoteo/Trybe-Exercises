// As Higher Order Functions são funções que usam outras funções em suas operações, devendo aceita-las como parâmetro e/ou retorna-las.

// Exemplo 1 - Calculator

const sum = (num1, num2) => num1 + num2; // Função de Soma
const sub = (num1, num2) => num1 - num2; // Função de Subtração
const mult = (num1, num2) => num1 * num2; // Função de multiplicação
const div = (num1, num2) => num1 / num2; // Função de Divisão
const calculator = (func) => func(10, 5); // Função que passa parametros já pré-definidos.

console.log(calculator(sum));
console.log(calculator(sub));
console.log(calculator(mult));
console.log(calculator(div));
