// 1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. 

/*
//Adição
let a = 2;
let b = 5;
let adicao = a + b;
console.log(adicao);

//Subtração
let a = 8;
let b = 3;
let subtracao = a - b;
console.log(subtracao);

//Multiplicação
let a = 2;
let b = 5;
let multiplicacao = a * b;
console.log(multiplicacao);

//Divisão
let a = 8;
let b = 2;
let divisao = a / b;
console.log(divisao);


//Módulo
let a = 10;
let b = 10;
let modulo = a % b;
console.log(modulo);
*/

/*
// 2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.

let a = 35;
let b = 50;

if ( a > b ) {
  console.log ("o maior é a");
}
else {
  console.log("o maior é b");
}
*/

/*
// 3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let a = 5;
let b = 8;
let c = 2;

if ( a > b && a > c) {
  console.log( "A é maior.")
}
else if ( b > a && b > c) {
  console.log( "B é maior.")
}
else {
  console.log("C é maior.")
}
*/

/*
// 4 - Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

let variavel = 0;

if (variavel > 0){
  console.log('positive');
}
else if (variavel < 0){
  console.log('negative');
}
else{
  console.log('zero')
}
*/

/*
// 5 - Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
Um ângulo será considerado inválido se não tiver um valor positivo.


let a = 20;
let b = 60;
let c = 90;

if ( a+b+c != 180){
  console.log('erro');
}
else if ( a < 0 || b < 0 || c < 0){
  console.log('erro');
}
else{
  console.log(true);
}
*/

/*
// 6 - Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais) //

let peca = 'Cavalo';
peca = peca.toLowerCase();

switch (peca){
  case 'rei':
    console.log("anda uma casa em qualquer direção")
    break;
  case 'rainha':
    console.log("anda quantas casa quiser em qualquer direção");
    break;
  case 'torre':
    console.log("anda apenas na horizontal e vertical");
    break;
  case 'bispo':
    console.log("anda sempre na diagonal");
    break;
  case 'cavalo':
    console.log("anda sempre em L");
    break;
  case 'peao':
    console.log("anda apenas uma casa e somente para frente, em seu primeiro movimento pode andar duas casas")
  default:
    console.log("erro: opção inválida")
}
*/

/*
// 7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.


let grade = 41;

if (grade > 100 || grade < 0){
  console.log("Erro: opção inválida")
}
else if (grade >= 90){
  console.log("A");
}
else if (grade >= 80){
  console.log("B");
}
else if (grade >= 70){
  console.log("C");
}
else if (grade >= 60){
  console.log("D");
}
else if (grade >= 50){
  console.log("E");
}
else{
  console.log("F");
}
*/

/*
// 8 - Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if .


let a = 1;
let b = 2;
let c = 3;

if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0 ){
  console.log(true)
}else{
  console.log(false)
}
*/

/*
// 9 - Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if .

let a = 1;
let b = 2;
let c = 3;

if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0){
  console.log(true);
}else{
  console.log('Erro')
}
*/

/*
// 10 - Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto) //


let custo = 200;
let venda = 390;
let custoTotal = custo * 1.2;
let lucro = venda - custoTotal;
let lucroTotal = lucro * 1000


if (custo == 0 || venda == 0){
  console.log('Erro');
}else{
  console.log(lucroTotal)
}
*/

/*
// 11 - Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
INSS (Instituto Nacional do Seguro Social)
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

IR (Imposto de Renda)
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
R$ 2.670,00: salário com INSS já deduzido;
7.5%: alíquota de imposto de renda;
R$ 142,80 parcela a se deduzir do imposto.
Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
Resultado: R$ 2.612,55.

Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?

let salario = 3000;
let inssAliq1 = 0.08;
let inssAliq2 = 0.09;
let inssAliq3 = 0.11;
let inssAliq4 = 570.88;
let irAliq1 = 0;
let irAliq2 = 0.075;
let irAliq3 = 0.15;
let irAliq4 = 0.225;
let irAliq5 = 0.275;
let salBase = null;
let salLiq = null;

if ( salario < 1556.94){
  inss = salario * inssAliq1;
}else if ( salario <= 2594.92){
  inss = salario * inssAliq2;
}else if (salario <= 5189.82){
  inss = salario * inssAliq3
}else{
  inss = 570.88
}

salBase = salario - inss;

if (salBase <= 1903.98){
  irpf = irAliq1;
}else if ( salBase <= 2826.65){
  irpf = (salBase * irAliq2) - 142.8;
}else if ( salBase <= 3751.05){
  irpf = (salBase * irAliq3) - 354.8;
}else if (salBase <= 4664.68){
  irpf = ( salBase * irAliq4) - 636.13;
}else{
  irpf = ( salBase * irAliq5) - 869.36;
}

salLiq = salBase - irpf;

console.log(salLiq);
*/