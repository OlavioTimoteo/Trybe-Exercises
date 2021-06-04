function maiorValor(array){
  let maior = teste[0];

  for (let i = 0; i < array.length; i += 1){
    if (array[i] >= maior){
      maior = teste[i];
    };
  };
  return array.indexOf(maior);
};

let teste = [2, 3, 6, 7, 10, 1];
console.log(maiorValor(teste));
