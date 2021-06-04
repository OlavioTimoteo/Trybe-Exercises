/* Parte 2
const name = "Olavio";
const birthCity = "Bonito";
console.log(birthCity);
*/

//Parte 3
/*
let movie = "Avengers"; //string literal.
let score = 10; //number literal.
let isValid = true; //boolean.
let name; //undefined.
let color = null; // Nulo, esperando redefinição posterior.
*/

/*
// É possivel fazer operações com +, -, *, /, **
let salary = 3500;
console.log(salary + salary);
console.log(salary - salary);
console.log(salary * salary);
console.log(salary / salary);
console.log(3 ** 3);
*/

/*
// incrementar ++
// decrementar --
let salary = 3500;
//salary ++;
salary--;
console.log(salary);
*/
/*
let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';
patientId = 50
console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);
console.log(typeof patientId);
console.log(typeof patientAge);
console.log(patientId);


let base = 5;
let altura = 8;
let area = base * altura;
//let perimetro = base * 2 + altura * 2;
let perimetro = (base + altura) *2 ;
console.log(area);
*/

//parte 4
// if - se
// else - senão

/* Exemplo:
if (condicao) {
    //codigo
}
else if (outraCondicao) {
    //outra condição
}
else if (outraCondicao) {
    //outra condição
}
else {
    //condição
}
*/
/*
let trybe = 14;
if (trybe >= 14 && trybe <14.40) {
    console.log("Esquenta");
}
else if (trybe >= 16.30 && trybe < 17.50) {
    console.log("Aula ao vivo");
}
else if (trybe >= 19.40 && trybe < 20) {
    console.log("Fechamento");
}
else {
    console.log("Fora dos momentos síncronos");
}
*/
/*
let candidato = 30;
if (candidato >= 80) {
    console.log("Parabéns, você foi aprovado(a)!");
} 
else if (candidato < 80 && candidato >= 60) {
    console.log("Você está na lista de espera");
}
else {
console.log("Você foi reprovado(a)");
}
*/

// parte 5
//switch -- case
/*
let trafficLight =  "verde";

switch (trafficLight) {
    case "vermelho":
      console.log("pare!");
      break;

      case "amarelo":
        console.log("atenção!");
        break;

        case "verde":
          console.log("siga!");
          break;

          default:
            console.log("valor não identificado.");
}
*/

let pessoaCandidata = "reprovada";

switch (pessoaCandidata) {
  case "aprovada":
    console.log("aprovada!");
    break;

  case "lista":
    console.log("lista.");
    break;

  case "reprovada":
    console.log("reprovada.");
    break;

  default:
    console.log("não se aplica.");
}