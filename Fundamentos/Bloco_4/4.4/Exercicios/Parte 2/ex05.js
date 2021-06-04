function repeticoes(array){
  let contador = 0;
  let guarda = 0;
  let qtd = 0;
  let maior = 0;

  for ( let i of array){
    guarda = i;
    for (let index of array){
      if (index == guarda){
        contador += 1;
      }
      if (contador > qtd){
        qtd = contador;
        maior = guarda;
      }
    }
    contador = 0;
  }
  return maior;
};

let teste = [2, 3, 2, 5, 8, 2, 3];

console.log(repeticoes(teste));
