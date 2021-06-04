function menorValor(array){
  let menor = array[0];
  for (let i = 0; i < array.length; i += 1){
    if (array[i] <= menor){
      menor = array[i];
    };
  };
  return array.indexOf(menor);
};

let teste = [2, 4, 6, 7, 10, 0, -3];

console.log(menorValor(teste));
