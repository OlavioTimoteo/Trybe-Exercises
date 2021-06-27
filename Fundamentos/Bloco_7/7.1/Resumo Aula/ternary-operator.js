// A sintaxe básica do operador ternário é muito simples:
// `expressão verdadeira ou falsa` ? `retorno se verdadeira` : `retorno se falsa`;

const check = (age) => {
  if (age >= 18) {
    return `Você tem idade para dirigir`;
  } else {
    return `Você não tem idade para dirigir`;
  }
};
console.log(check(13));


////////////////////////////////////////////////////////////////////////////////////////////////////////////

const check = age => age >= 18 ? `Você tem idade para dirigir!` : `Você não tem idade para dirigir!`;
console.log(check(10));
